import { useState } from 'react';
import { X, Check, Calendar, Clock, ArrowRight, ArrowLeft, User, Phone, ShoppingBag, Sparkles } from 'lucide-react';
import { SERVICES, PROFESSIONALS } from '../data';
import { Service } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: 'cilios' | 'sobrancelhas' | 'todos';
}

export default function BookingModal({ isOpen, onClose, initialCategory = 'todos' }: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState<Service[]>([]);
  const [selectedProfessional, setSelectedProfessional] = useState<string>('any');
  const [preferredDate, setPreferredDate] = useState<string>('');
  const [preferredTime, setPreferredTime] = useState<string>('');
  const [clientName, setClientName] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [serviceFilter, setServiceFilter] = useState<string>(initialCategory);

  if (!isOpen) return null;

  const handleToggleService = (service: Service) => {
    if (selectedServices.find((s) => s.id === service.id)) {
      setSelectedServices(selectedServices.filter((s) => s.id !== service.id));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const filteredServices = serviceFilter === 'todos' 
    ? SERVICES 
    : SERVICES.filter((s) => s.category === serviceFilter);

  // Totals calculations
  const totalDurationMin = selectedServices.reduce((acc, s) => {
    const min = parseInt(s.duration || '0');
    return acc + (isNaN(min) ? 0 : min);
  }, 0);

  const formatTotalDuration = (min: number) => {
    if (min < 60) return `${min} min`;
    const hours = Math.floor(min / 60);
    const remaining = min % 60;
    return remaining > 0 ? `${hours}h ${remaining}min` : `${hours}h`;
  };

  const getEstimatedTotal = () => {
    let hasRange = false;
    let sum = 0;
    selectedServices.forEach((s) => {
      const valText = s.priceEstimate?.replace(/[^0-9]/g, '') || '0';
      const val = parseInt(valText);
      sum += isNaN(val) ? 0 : val;
      if (s.priceEstimate?.includes('A partir')) {
        hasRange = true;
      }
    });
    return `${hasRange ? 'A partir de ' : '' }R$ ${sum}`;
  };

  const handleNextStep = () => {
    if (step === 1 && selectedServices.length === 0) {
      alert('Por favor, selecione pelo menos um serviço para prosseguir.');
      return;
    }
    if (step === 2 && !selectedProfessional) {
      alert('Por favor, selecione uma opção de profissional.');
      return;
    }
    if (step === 3 && (!preferredDate || !preferredTime)) {
      alert('Por favor, preencha a data e o horário de sua preferência.');
      return;
    }
    if (step === 4 && !clientName.trim()) {
      alert('Por favor, informe seu nome para contato.');
      return;
    }
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handleFinishAndSendWhatsApp = () => {
    const profName = selectedProfessional === 'any' 
      ? 'Qualquer profissional disponível' 
      : PROFESSIONALS.find(p => p.id === selectedProfessional)?.name || '';

    // Convert Date format YYYY-MM-DD to DD/MM/YYYY
    let formattedDate = preferredDate;
    if (preferredDate) {
      const parts = preferredDate.split('-');
      if (parts.length === 3) {
        formattedDate = `${parts[2]}/${parts[1]}/${parts[0]}`;
      }
    }

    const servicesList = selectedServices.map(s => `  • ${s.name} (${s.priceEstimate})`).join('\n');
    
    const text = `Olá Ane Souza! ✨ 
Gostaria de solicitar um agendamento de horário personalizado:

👤 *Cliente:* ${clientName}
📱 *Telefone:* ${clientPhone || 'Não informado'}

💆‍♀️ *Serviços:*
${servicesList}

⏱️ *Duração Estimada:* ${formatTotalDuration(totalDurationMin)}
💰 *Valor Estimado:* ${getEstimatedTotal()}

👩‍🎨 *Profissional:* ${profName}
📆 *Data:* ${formattedDate}
⏰ *Horário sugerido:* ${preferredTime}h

Estou aguardando a confirmação da disponibilidade! Muito obrigada.`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `http://wa.me/+5551980889798/?text=${encodedText}`;
    window.open(whatsappUrl, '_blank', 'noreferrer');
    onClose();
    // Reset state
    setStep(1);
    setSelectedServices([]);
    setSelectedProfessional('any');
    setPreferredDate('');
    setPreferredTime('');
    setClientName('');
    setClientPhone('');
  };

  const categories = [
    { id: 'todos', label: 'Todos' },
    { id: 'cilios', label: 'Cílios' },
    { id: 'sobrancelhas', label: 'Sobrancelhas' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-grafite/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="bg-perola w-full max-w-2xl rounded-none border border-cinza-medio shadow-2xl relative z-10 flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-6 border-b border-cinza-medio/60 flex items-center justify-between">
          <div>
            <h3 className="font-serif text-xl md:text-2xl tracking-wider text-grafite font-light">
              Agendamento Ane Souza
            </h3>
            <p className="font-sans text-[10px] uppercase tracking-widest text-dourado font-medium mt-1">
              Passo {step} de 5 • {step === 1 && 'Escolha os serviços'}
              {step === 2 && 'Selecione a profissional'}
              {step === 3 && 'Escolha data & hora'}
              {step === 4 && 'Suas informações'}
              {step === 5 && 'Confirmação e WhatsApp'}
            </p>
          </div>
          <button 
            onClick={onClose}
            className="p-1 hover:text-dourado text-grafite/70 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body / Steps */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8">
          
          {/* STEP 1: SERVICES SELECTION */}
          {step === 1 && (
            <div className="space-y-6">
              <div className="text-center max-w-md mx-auto">
                <Sparkles className="mx-auto text-dourado mb-2" size={24} />
                <h4 className="font-serif text-lg text-grafite">O que você deseja cuidar hoje?</h4>
                <p className="text-xs text-grafite/70 mt-1">
                  Selecione um ou mais serviços para montar seu atendimento ideal.
                </p>
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-2 justify-center border-b border-cinza-medio/40 pb-4">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setServiceFilter(cat.id)}
                    className={`font-sans text-[10px] uppercase tracking-widest px-4 py-2 transition-all duration-300 ${
                      serviceFilter === cat.id
                        ? 'bg-grafite text-perola font-semibold'
                        : 'bg-perola text-grafite/80 hover:bg-dourado/5 hover:text-grafite'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Services List */}
              <div className="space-y-3 max-h-[350px] overflow-y-auto pr-1">
                {filteredServices.map((service) => {
                  const isSelected = selectedServices.some((s) => s.id === service.id);
                  return (
                    <div
                      key={service.id}
                      onClick={() => handleToggleService(service)}
                      className={`p-4 border transition-all duration-300 cursor-pointer flex items-start gap-4 ${
                        isSelected
                          ? 'bg-dourado/10 border-dourado shadow-sm'
                          : 'bg-perola border-cinza-medio hover:border-cinza-medio/50'
                      }`}
                    >
                      <div className={`mt-0.5 w-4 h-4 border flex items-center justify-center transition-colors ${
                        isSelected ? 'bg-dourado border-dourado text-perola' : 'border-cinza-medio/50 bg-perola'
                      }`}>
                        {isSelected && <Check size={12} strokeWidth={3} />}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start gap-2">
                          <h5 className="font-sans text-sm font-semibold text-grafite leading-snug">
                            {service.name}
                          </h5>
                          <span className="font-sans text-sm font-bold text-dourado whitespace-nowrap">
                            {service.priceEstimate}
                          </span>
                        </div>
                        <p className="text-xs text-grafite/70 mt-1 line-clamp-2">
                          {service.description}
                        </p>
                        <div className="flex items-center gap-1 mt-2 text-[10px] font-medium text-grafite/50 tracking-wide uppercase">
                          <Clock size={10} />
                          {service.duration}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 2: PROFESSIONAL SELECTION */}
          {step === 2 && (
            <div className="space-y-6">
              <div className="text-center max-w-md mx-auto">
                <User className="mx-auto text-dourado mb-2" size={24} />
                <h4 className="font-serif text-lg text-grafite">Escolha a profissional</h4>
                <p className="text-xs text-grafite/70 mt-1">
                  Atendimento personalizado pensado especialmente para você.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 max-w-md mx-auto">
                {/* Anyone option */}
                <div
                  onClick={() => setSelectedProfessional('any')}
                  className={`p-5 border transition-all duration-300 cursor-pointer flex items-center gap-4 ${
                    selectedProfessional === 'any'
                      ? 'bg-dourado/10 border-dourado shadow-sm'
                      : 'bg-perola border-cinza-medio hover:border-cinza-medio/50'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-full bg-cinza-medio/30 flex items-center justify-center text-dourado border border-cinza-medio font-semibold font-serif text-base`}>
                    ★
                  </div>
                  <div>
                    <h5 className="font-sans text-sm font-bold text-grafite">Qualquer Profissional</h5>
                    <p className="text-xs text-grafite/70">A melhor disponível para seu horário.</p>
                  </div>
                </div>

                {/* Individual professionals */}
                {PROFESSIONALS.map((prof) => (
                  <div
                    key={prof.id}
                    onClick={() => setSelectedProfessional(prof.id)}
                    className={`p-5 border transition-all duration-300 cursor-pointer flex items-center gap-4 ${
                      selectedProfessional === prof.id
                        ? 'bg-dourado/10 border-dourado shadow-sm'
                        : 'bg-perola border-cinza-medio hover:border-cinza-medio/50'
                    }`}
                  >
                    <img
                      src={prof.imageUrl}
                      alt={prof.name}
                      referrerPolicy="no-referrer"
                      className="w-12 h-12 rounded-full object-cover border border-cinza-medio"
                    />
                    <div>
                      <h5 className="font-sans text-sm font-bold text-grafite">{prof.name}</h5>
                      <p className="text-xs text-dourado font-medium">{prof.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: DATE & TIME SELECTION */}
          {step === 3 && (
            <div className="space-y-6">
              <div className="text-center max-w-md mx-auto">
                <Calendar className="mx-auto text-dourado mb-2" size={24} />
                <h4 className="font-serif text-lg text-grafite">Escolha a data e horário ideal</h4>
                <p className="text-xs text-grafite/70 mt-1">
                  Selecione sua preferência de dia e horário. Vamos validar a agenda para lhe confirmar.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-md mx-auto">
                {/* Date Input */}
                <div className="space-y-2">
                  <label className="block text-[10px] font-sans font-bold uppercase tracking-widest text-grafite/50">
                    Data de Preferência
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full bg-perola border border-cinza-medio focus:border-dourado focus:outline-none px-4 py-3 text-sm rounded-none text-grafite"
                  />
                </div>

                {/* Time select */}
                <div className="space-y-2">
                  <label className="block text-[10px] font-sans font-bold uppercase tracking-widest text-grafite/50">
                    Horário Sugerido
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full bg-perola border border-cinza-medio focus:border-dourado focus:outline-none px-4 py-3 text-sm rounded-none text-grafite"
                  >
                    <option value="">Selecione...</option>
                    <option value="09:00">09:00</option>
                    <option value="10:00">10:00</option>
                    <option value="11:00">11:00</option>
                    <option value="13:00">13:00</option>
                    <option value="14:00">14:00</option>
                    <option value="15:00">15:00</option>
                    <option value="16:00">16:00</option>
                    <option value="17:00">17:00</option>
                    <option value="18:00">18:00</option>
                    <option value="19:00">19:00</option>
                  </select>
                </div>
              </div>

              <div className="text-center max-w-sm mx-auto p-4 bg-dourado/5 border border-cinza-medio/50 text-[11px] text-grafite/70">
                📌 Atendimento de Terça a Sábado, das 09:00 às 19:30.
              </div>
            </div>
          )}

          {/* STEP 4: CLIENT INFO */}
          {step === 4 && (
            <div className="space-y-6">
              <div className="text-center max-w-md mx-auto">
                <Phone className="mx-auto text-dourado mb-2" size={24} />
                <h4 className="font-serif text-lg text-grafite">Seus dados de contato</h4>
                <p className="text-xs text-grafite/70 mt-1">
                  Precisamos apenas do seu nome e telefone para organizar seu atendimento.
                </p>
              </div>

              <div className="space-y-4 max-w-md mx-auto">
                <div className="space-y-2">
                  <label className="block text-[10px] font-sans font-bold uppercase tracking-widest text-grafite/50">
                    Seu Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Ana Paula Vasconcellos"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full bg-perola border border-cinza-medio focus:border-dourado focus:outline-none px-4 py-3 text-sm rounded-none text-grafite placeholder-grafite/50"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-[10px] font-sans font-bold uppercase tracking-widest text-grafite/50">
                    Seu WhatsApp (Opcional)
                  </label>
                  <input
                    type="tel"
                    placeholder="Ex: (11) 99999-8888"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    className="w-full bg-perola border border-cinza-medio focus:border-dourado focus:outline-none px-4 py-3 text-sm rounded-none text-grafite placeholder-grafite/50"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 5: SUMMARY & REDIRECT */}
          {step === 5 && (
            <div className="space-y-6">
              <div className="text-center max-w-md mx-auto">
                <Check className="mx-auto text-dourado bg-dourado/10 p-2 rounded-full mb-2" size={40} />
                <h4 className="font-serif text-lg text-grafite">Tudo pronto para o seu momento!</h4>
                <p className="text-xs text-grafite/70 mt-1">
                  Confira abaixo o resumo do seu atendimento. Ao clicar no botão, você será direcionada para enviar o pedido no WhatsApp e finalizar o agendamento.
                </p>
              </div>

              {/* Summary Card */}
              <div className="bg-perola border border-cinza-medio p-6 max-w-md mx-auto space-y-4">
                <div className="flex items-center justify-between border-b border-cinza-medio/30 pb-3">
                  <span className="text-xs font-bold text-grafite/50 uppercase tracking-wider">Cliente</span>
                  <span className="text-sm font-semibold text-grafite">{clientName}</span>
                </div>

                {/* Selected Services list */}
                <div className="border-b border-cinza-medio/30 pb-3 space-y-2">
                  <span className="text-[10px] font-bold text-grafite/50 uppercase tracking-wider block">Serviços Selecionados</span>
                  <div className="space-y-1.5">
                    {selectedServices.map((service) => (
                      <div key={service.id} className="flex justify-between items-center text-xs">
                        <span className="text-grafite font-medium">• {service.name}</span>
                        <span className="text-dourado font-bold">{service.priceEstimate}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 border-b border-cinza-medio/30 pb-3 text-xs">
                  <div>
                    <span className="text-[10px] font-bold text-grafite/50 uppercase tracking-wider block mb-1">Duração Total</span>
                    <span className="text-grafite font-semibold flex items-center gap-1">
                      <Clock size={12} className="text-dourado" />
                      {formatTotalDuration(totalDurationMin)}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-grafite/50 uppercase tracking-wider block mb-1">Total Estimado</span>
                    <span className="text-dourado font-bold text-sm">
                      {getEstimatedTotal()}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-[10px] font-bold text-grafite/50 uppercase tracking-wider block mb-1">Profissional</span>
                    <span className="text-grafite font-semibold">
                      {selectedProfessional === 'any' 
                        ? 'Qualquer disponível' 
                        : PROFESSIONALS.find(p => p.id === selectedProfessional)?.name}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-grafite/50 uppercase tracking-wider block mb-1">Data e Hora</span>
                    <span className="text-grafite font-semibold">
                      {preferredDate ? preferredDate.split('-').reverse().join('/') : ''} às {preferredTime}h
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-cinza-medio/60 bg-perola flex items-center justify-between">
          {/* Basket Indicator (only on step 1) */}
          {step === 1 ? (
            <div className="flex items-center gap-2 text-xs text-grafite/80 font-medium">
              <ShoppingBag size={14} className="text-dourado" />
              <span>
                {selectedServices.length === 0 
                  ? 'Nenhum item' 
                  : `${selectedServices.length} ${selectedServices.length === 1 ? 'item' : 'itens'} selecionado(s)`}
              </span>
            </div>
          ) : (
            <button
              onClick={handlePrevStep}
              className="flex items-center gap-1 font-sans text-[10px] uppercase tracking-widest text-grafite/80 hover:text-dourado transition-colors font-bold"
            >
              <ArrowLeft size={14} />
              Voltar
            </button>
          )}

          {/* Next / Submit Button */}
          {step < 5 ? (
            <button
              onClick={handleNextStep}
              disabled={step === 1 && selectedServices.length === 0}
              className={`flex items-center gap-1 font-sans text-[10px] uppercase tracking-widest px-6 py-3 transition-all duration-300 font-semibold ${
                step === 1 && selectedServices.length === 0
                  ? 'bg-cinza-medio/30 text-grafite/50 cursor-not-allowed'
                  : 'bg-grafite text-perola hover:bg-dourado'
              }`}
            >
              Próximo
              <ArrowRight size={14} />
            </button>
          ) : (
            <button
              onClick={handleFinishAndSendWhatsApp}
              className="flex items-center gap-2 font-sans text-xs uppercase tracking-widest px-6 py-3 bg-dourado hover:bg-rose text-perola font-bold transition-all duration-300"
            >
              Finalizar pelo WhatsApp
              <ArrowRight size={14} />
            </button>
          )}
        </div>

      </div>
    </div>
  );
}
