"use client";

import { useState } from 'react';

interface Service {
  id: string;
  title: string;
  category: string;
  description: string;
  detalle: string;
  tiempoDemora: string;
  explicacionAmpliada: string;
}

const servicesList: Service[] = [
  {
    id: 'cedulas',
    title: 'Cédulas Ley 22.172',
    category: 'Judicial',
    description: 'Diligenciamiento profesional de cédulas y notificaciones con presentación directa en Tribunales de Córdoba.',
    detalle: 'Optimización de plazos procesales, control exhaustivo de casilleros y devolución inmediata de constancias firmadas.',
    tiempoDemora: '24 a 48 horas hábiles',
    explicacionAmpliada: 'Nos encargamos de la recepción de la cédula, control de recaudaciones legales, presentación en la oficina de mandamientos y notificaciones o tribunal correspondiente, seguimiento diario y retiro de la copia diligenciada con sello oficial para su devolución.'
  },
  {
    id: 'oficios',
    title: 'Oficios y Mandamientos',
    category: 'Judicial',
    description: 'Gestión y trámite de oficios judiciales y mandamientos de ley interjurisdiccionales.',
    detalle: 'Articulación directa con juzgados y dependencias para destrabar exhortos y mandamientos sin demoras.',
    tiempoDemora: '48 a 72 horas hábiles',
    explicacionAmpliada: 'Ideal para estudios de otras provincias o locales que necesitan presencialidad. Gestionamos la compulsa, libramientos, control de firmas autorizadas y diligenciamiento ante el organismo requerido.'
  },
  {
    id: 'exhortos',
    title: 'Exhortos y Rogatorias',
    category: 'Procesal',
    description: 'Coordinación y diligenciamiento integral de exhortos en la provincia.',
    detalle: 'Seguimiento riguroso de la rogatoria desde su radicación hasta su total trámite y conclusión.',
    tiempoDemora: '3 a 5 días hábiles',
    explicacionAmpliada: 'Incluye la radicación del exhorto en el tribunal de destino en Córdoba, pago de tasas si corresponde, gestión del proveído y diligenciamiento de las medidas ordenadas.'
  },
  {
    id: 'propiedad',
    title: 'Registro de la Propiedad',
    category: 'Registral',
    description: 'Solicitud e inscripción de certificados de dominio, inhibiciones y minutas.',
    detalle: 'Gestiones ágiles ante el RPI para asegurar que tus operaciones inmobiliarias no sufran trabas registrales.',
    tiempoDemora: '24 a 72 horas (según urgencia)',
    explicacionAmpliada: 'Presentación y retiro de rogatorias, solicitud de certificados e informes dominiales, inhibiciones y anotaciones personales ante el Registro General de la Provincia.'
  },
  {
    id: 'automotor',
    title: 'Registro Automotor',
    category: 'Registral',
    description: 'Informes de dominio, radicación, transferencias y trámites en seccionales.',
    detalle: 'Asistencia y presentación express en registros del automotor con control previo de documentación.',
    tiempoDemora: '24 a 48 horas',
    explicacionAmpliada: 'Verificación de legajos, presentación de formularios 08, 02, 13, obtención de informes históricos de dominio y retiros de cédulas o títulos en seccionales.'
  },
  {
    id: 'civiles',
    title: 'Registros Civiles y ReNaPer',
    category: 'Administrativo',
    description: 'Obtención de partidas, certificados de nacimiento, matrimonio y defunción.',
    detalle: 'Retiro y tramitación simplificada de documentación oficial con validez legal.',
    tiempoDemora: '48 a 96 horas hábiles',
    explicacionAmpliada: 'Búsqueda de actas y partidas en los distintos registros civiles provinciales, legalización de las mismas y envío digital o físico según necesidad.'
  },
  {
    id: 'expedientes',
    title: 'Procuración de Expedientes',
    category: 'Judicial',
    description: 'Monitoreo, compulsa y control periódico de causas judiciales y administrativas.',
    detalle: 'Revisión periódica de estados procesales y retiro de copias o documentación en juzgados.',
    tiempoDemora: '24 horas desde la solicitud',
    explicacionAmpliada: 'Asistencia presencial al tribunal para revisar expedientes físicos, confronte de escritos, desglose de documentos y escaneo o extracción de copias completas.'
  },
  {
    id: 'legalizaciones',
    title: 'Legalizaciones y Apostillas',
    category: 'Documentación',
    description: 'Certificaciones, legalizaciones de firmas y apostillados para uso oficial.',
    detalle: 'Validación de instrumentos públicos y privados mediante canales oficiales certificados.',
    tiempoDemora: '2 a 4 días hábiles',
    explicacionAmpliada: 'Gestión ante Colegios Profesionales, Tribunal Superior de Justicia y Cancillería para dotar a la documentación de validez interjurisdiccional o internacional.'
  },
  {
    id: 'quiebras',
    title: 'Inscripción de Concursos y Quiebras',
    category: 'Judicial',
    description: 'Publicación de edictos y diligenciamientos en fueros concursales.',
    detalle: 'Gestión coordinada con martilleros y secretarías de juzgados intervinientes.',
    tiempoDemora: '48 a 72 horas hábiles',
    explicacionAmpliada: 'Diligenciamiento de publicaciones en Boletín Oficial, inscripción de inhibiciones generales de bienes en registros y notificações a sindicaturas.'
  },
  {
    id: 'comercial',
    title: 'Inspección de Personas Jurídicas (IPJ)',
    category: 'Registral',
    description: 'Trámites societarios, rúbrica de libros y presentaciones anuales.',
    detalle: 'Asesoramiento y presentación formal de balances y documentación corporativa.',
    tiempoDemora: '3 a 7 días hábiles',
    explicacionAmpliada: 'Presentación de trámites ordinarios y extraordinarios, inscripción de autoridades, reformas estatutarias y rúbrica digital/presencial de libros contables y societarios.'
  },
  {
    id: 'bancarios',
    title: 'Oficios Bancarios y Trabas',
    category: 'Judicial',
    description: 'Diligenciamiento de embargos e informes de entidades financieras.',
    detalle: 'Presentación de exhortos bancarios con estricta reserva y celeridad.',
    tiempoDemora: '24 a 48 horas hábiles',
    explicacionAmpliada: 'Presentación presencial o electrónica de medidas cautelares, oficios de informes de saldos y traba/levantamiento de embargos en casas centrales o sucursales bancarias.'
  },
  {
    id: 'catastro',
    title: 'Dirección General de Catastro',
    category: 'Registral',
    description: 'Certificados catastrales, mensuras y visaciones provinciales.',
    detalle: 'Control técnico y gestión documental ante reparticiones catastrales.',
    tiempoDemora: '3 a 5 días hábiles',
    explicacionAmpliada: 'Solicitud de certificados catastrales provinciales, presentación de planos de mensura y seguimiento de expedientes técnicos ante la DGC.'
  }
];

export default function Page() {
  const [activeTab, setActiveTab] = useState('todos');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const itemsPerPage = 6;

  const whatsappPhone = "1234567890"; 

  const filteredServices = activeTab === 'todos' 
    ? servicesList 
    : servicesList.filter(s => s.category.toLowerCase() === activeTab.toLowerCase());

  const totalPages = Math.ceil(filteredServices.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredServices.slice(startIndex, startIndex + itemsPerPage);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  return (
    <div style={{ 
      backgroundColor: '#ffffff', 
      color: '#0f172a', 
      minHeight: '100vh', 
      width: '100%', 
      margin: 0, 
      padding: 0, 
      boxSizing: 'border-box', 
      fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
      position: 'relative',
      overflowX: 'hidden'
    }}>
      
      <div style={{ maxWidth: '1280px', margin: '0 auto', width: '100%', padding: 'clamp(20px, 4vw, 64px) clamp(16px, 4vw, 48px)', boxSizing: 'border-box' }}>
        
        {/* HEADER RESPONSIVO */}
        <header style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          marginBottom: 'clamp(40px, 6vw, 80px)',
          borderBottom: '1px solid #e2e8f0',
          paddingBottom: '20px',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{ 
              width: '40px', 
              height: '40px', 
              backgroundColor: '#0f172a', 
              color: '#ffffff', 
              borderRadius: '10px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              fontWeight: 600,
              fontSize: '16px'
            }}>
              G
            </div>
            <div>
              <span style={{ fontSize: '18px', fontWeight: 600, color: '#0f172a', letterSpacing: '0.05em' }}>
                GEST<span style={{ fontWeight: 300, color: '#64748b' }}>OR</span>
              </span>
            </div>
          </div>

          <nav style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              <a href="#servicios" style={{ fontSize: '14px', color: '#0f172a', textDecoration: 'none', fontWeight: 500 }}>Servicios</a>
              <a href="#beneficios" style={{ fontSize: '14px', color: '#0f172a', textDecoration: 'none', fontWeight: 500 }}>Ventajas</a>
              <a href="#contacto" style={{ fontSize: '14px', color: '#0f172a', textDecoration: 'none', fontWeight: 500 }}>Oficina</a>
            </div>
            <a 
              href={`https://wa.me/${whatsappPhone}?text=${encodeURIComponent("Hola, quisiera consultar por un trámite general.")}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ 
                fontSize: '13px', 
                fontWeight: 500, 
                backgroundColor: '#0f172a', 
                color: '#ffffff', 
                padding: '10px 20px', 
                borderRadius: '100px', 
                textDecoration: 'none',
                border: '1px solid #0f172a',
                whiteSpace: 'nowrap'
              }}
            >
              Consulta Inmediata
            </a>
          </nav>
        </header>

        {/* HERO SECTION */}
        <section style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '36px', 
          alignItems: 'center', 
          marginBottom: 'clamp(60px, 8vw, 100px)' 
        }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '6px 14px', borderRadius: '100px', backgroundColor: '#f1f5f9', border: '1px solid #cbd5e1', marginBottom: '20px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#16a34a', display: 'inline-block' }} />
              <span style={{ fontSize: '13px', color: '#0f172a', fontWeight: 500 }}>10+ años de experiencia · Córdoba</span>
            </div>

            <h1 style={{ 
              fontSize: 'clamp(32px, 4.5vw, 56px)', 
              fontWeight: 300, 
              letterSpacing: '-0.02em',
              lineHeight: 1.1, 
              margin: '0 0 20px 0', 
              color: '#0f172a'
            }}>
              Gestión judicial y trámites corporativos con agilidad real.
            </h1>

            <p style={{ 
              fontSize: 'clamp(15px, 2vw, 18px)', 
              color: '#475569', 
              lineHeight: 1.6, 
              margin: '0 0 28px 0',
              fontWeight: 300
            }}>
              Aceleramos las gestiones de tu estudio jurídico o empresa con presentación presencial inmediata, seguimiento constante y cero demoras.
            </p>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <a href={`https://wa.me/${whatsappPhone}?text=${encodeURIComponent("Hola, quisiera consultar por un trámite general.")}`} target="_blank" rel="noopener noreferrer" style={{ 
                padding: '14px 26px', 
                backgroundColor: '#0f172a', 
                color: '#ffffff', 
                border: '1px solid #0f172a',
                borderRadius: '100px', 
                fontSize: '14px', 
                fontWeight: 500, 
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                Consultar por WhatsApp →
              </a>
              <a href="#servicios" style={{ 
                padding: '14px 26px', 
                backgroundColor: '#ffffff', 
                color: '#0f172a', 
                border: '1px solid #cbd5e1', 
                borderRadius: '100px', 
                fontSize: '14px', 
                fontWeight: 500, 
                textDecoration: 'none' 
              }}>
                Ver Servicios
              </a>
            </div>
          </div>

          {/* CONTENEDOR DE LA IMAGEN */}
          <div style={{ 
            position: 'relative', 
            borderRadius: '20px', 
            overflow: 'hidden', 
            border: '1px solid #cbd5e1',
            boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
            backgroundColor: '#f8fafc',
            minHeight: '300px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img 
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=800" 
              alt="Gestión de trámites profesionales y entrega de documentación" 
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover',
                minHeight: '300px',
                display: 'block'
              }} 
            />
            <div style={{
              position: 'absolute',
              bottom: '16px',
              left: '16px',
              right: '16px',
              backgroundColor: 'rgba(15, 23, 42, 0.85)',
              backdropFilter: 'blur(8px)',
              padding: '12px 16px',
              borderRadius: '14px',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <span style={{ fontSize: '18px' }}>📄</span>
              <div>
                <p style={{ fontSize: '12px', margin: 0, fontWeight: 500, color: '#cbd5e1' }}>Atención personalizada</p>
                <p style={{ fontSize: '13px', margin: 0, fontWeight: 600 }}>Diligenciamiento seguro y profesional</p>
              </div>
            </div>
          </div>
        </section>

        {/* BENEFICIOS */}
        <section id="beneficios" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
          gap: '20px', 
          marginBottom: 'clamp(60px, 8vw, 100px)' 
        }}>
          <div style={{ backgroundColor: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '20px', padding: '28px' }}>
            <span style={{ fontSize: '12px', fontWeight: 600, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '10px' }}>01 / Presencia</span>
            <h3 style={{ fontSize: '18px', fontWeight: 600, margin: '0 0 10px 0', color: '#0f172a' }}>Gestión diaria en Tribunales</h3>
            <p style={{ fontSize: '14px', color: '#475569', margin: 0, fontWeight: 300, lineHeight: 1.5 }}>
              Presentaciones físicas constantes en juzgados y reparticiones provinciales de Córdoba sin intermediarios lentos.
            </p>
          </div>

          <div style={{ backgroundColor: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '20px', padding: '28px' }}>
            <span style={{ fontSize: '12px', fontWeight: 600, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '10px' }}>02 / Celeridad</span>
            <h3 style={{ fontSize: '18px', fontWeight: 600, margin: '0 0 10px 0', color: '#0f172a' }}>Devolución inmediata</h3>
            <p style={{ fontSize: '14px', color: '#475569', margin: 0, fontWeight: 300, lineHeight: 1.5 }}>
              Envío rápido de constancias firmadas, cédulas diligenciadas y reportes claros directo a tu WhatsApp.
            </p>
          </div>

          <div style={{ backgroundColor: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '20px', padding: '28px' }}>
            <span style={{ fontSize: '12px', fontWeight: 600, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '10px' }}>03 / Cobertura</span>
            <h3 style={{ fontSize: '18px', fontWeight: 600, margin: '0 0 10px 0', color: '#0f172a' }}>Capital e Interior</h3>
            <p style={{ fontSize: '14px', color: '#475569', margin: 0, fontWeight: 300, lineHeight: 1.5 }}>
              Capacidad logística instalada para cubrir tanto la ciudad de Córdoba como las principales jurisdicciones del interior.
            </p>
          </div>
        </section>

        {/* LISTADO DE SERVICIOS */}
        <section id="servicios" style={{ marginBottom: 'clamp(60px, 8vw, 100px)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '32px', flexWrap: 'wrap', gap: '20px' }}>
            <div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 400, margin: '0 0 6px 0', color: '#0f172a' }}>
                Nuestros Servicios
              </h2>
              <p style={{ fontSize: '14px', color: '#64748b', margin: 0, fontWeight: 300 }}>
                Hacé clic en cualquier trámite para ver la explicación detallada y los tiempos de demora.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {['todos', 'judicial', 'registral', 'procesal', 'administrativo'].map((tab) => {
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    onClick={() => handleTabChange(tab)}
                    style={{
                      padding: '8px 16px',
                      borderRadius: '100px',
                      border: '1px solid #0f172a',
                      backgroundColor: isActive ? '#0f172a' : '#ffffff',
                      color: isActive ? '#ffffff' : '#0f172a',
                      fontSize: '13px',
                      fontWeight: 500,
                      cursor: 'pointer',
                      textTransform: 'capitalize'
                    }}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', minHeight: '480px' }}>
            {currentItems.map((service) => {
              return (
                <div 
                  key={service.id}
                  onClick={() => setSelectedService(service)}
                  style={{
                    border: '1px solid #cbd5e1',
                    borderRadius: '18px',
                    padding: '24px',
                    backgroundColor: '#ffffff',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'stretch',
                    cursor: 'pointer',
                    gap: '20px',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
                    flexWrap: 'wrap'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#0f172a';
                    e.currentTarget.style.backgroundColor = '#f8fafc';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#cbd5e1';
                    e.currentTarget.style.backgroundColor = '#ffffff';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div style={{ flex: '1 1 280px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                      <span style={{ fontSize: '11px', padding: '3px 10px', backgroundColor: '#f1f5f9', borderRadius: '100px', color: '#64748b', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        {service.category}
                      </span>
                    </div>
                    <h3 style={{ fontSize: '18px', fontWeight: 600, margin: '0 0 6px 0', color: '#0f172a' }}>
                      {service.title}
                    </h3>
                    <p style={{ fontSize: '14px', color: '#475569', margin: '0 0 8px 0', fontWeight: 300, lineHeight: 1.5 }}>
                      {service.description}
                    </p>
                    <p style={{ fontSize: '12px', color: '#16a34a', margin: 0, fontWeight: 500 }}>
                      ⏱ Demora estimada: {service.tiempoDemora}
                    </p>
                  </div>

                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    fontSize: '13px', 
                    fontWeight: 500, 
                    color: '#0f172a',
                    whiteSpace: 'nowrap',
                    backgroundColor: '#f1f5f9',
                    padding: '10px 18px',
                    borderRadius: '100px',
                    alignSelf: 'center'
                  }}>
                    Ver Detalle +
                  </div>
                </div>
              );
            })}
          </div>

          {/* PAGINACIÓN */}
          {totalPages > 1 && (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', marginTop: '36px' }}>
              {Array.from({ length: totalPages }, (_, index) => {
                const pageNumber = index + 1;
                const isActive = currentPage === pageNumber;
                return (
                  <button
                    key={pageNumber}
                    onClick={() => setCurrentPage(pageNumber)}
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      border: '1px solid #0f172a',
                      backgroundColor: isActive ? '#0f172a' : '#ffffff',
                      color: isActive ? '#ffffff' : '#0f172a',
                      fontSize: '13px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {pageNumber}
                  </button>
                );
              })}
            </div>
          )}
        </section>
      </div>

      {/* VENTANA DINÁMICA / MODAL FLOTANTE */}
      {selectedService && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(15, 23, 42, 0.6)',
          backdropFilter: 'blur(4px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2000,
          padding: '16px',
          boxSizing: 'border-box'
        }}>
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '20px',
            maxWidth: '520px',
            width: '100%',
            maxHeight: '90vh',
            overflowY: 'auto',
            padding: 'clamp(24px, 4vw, 36px)',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
            position: 'relative',
            border: '1px solid #cbd5e1',
            boxSizing: 'border-box'
          }}>
            {/* Botón Cerrar */}
            <button
              onClick={() => setSelectedService(null)}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: '#f1f5f9',
                border: 'none',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: 600,
                color: '#0f172a'
              }}
            >
              ✕
            </button>

            <span style={{ fontSize: '11px', padding: '4px 10px', backgroundColor: '#f1f5f9', borderRadius: '100px', color: '#64748b', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em', display: 'inline-block', marginBottom: '14px' }}>
              {selectedService.category}
            </span>

            <h3 style={{ fontSize: '22px', fontWeight: 600, color: '#0f172a', margin: '0 0 10px 0' }}>
              {selectedService.title}
            </h3>

            <div style={{ display: 'inline-block', backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', padding: '6px 14px', borderRadius: '10px', marginBottom: '18px' }}>
              <span style={{ fontSize: '13px', color: '#15803d', fontWeight: 600 }}>
                ⏱ Tiempo estimado de demora: {selectedService.tiempoDemora}
              </span>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <h4 style={{ fontSize: '14px', fontWeight: 600, color: '#0f172a', margin: '0 0 6px 0' }}>¿Cómo se realiza el trámite?</h4>
              <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.6, margin: 0, fontWeight: 300 }}>
                {selectedService.explicacionAmpliada}
              </p>
            </div>

            <div style={{ backgroundColor: '#f8fafc', padding: '14px', borderRadius: '12px', marginBottom: '24px', border: '1px solid #e2e8f0' }}>
              <p style={{ fontSize: '12px', color: '#64748b', margin: 0, fontWeight: 300 }}>
                💡 <strong style={{ fontWeight: 500, color: '#0f172a' }}>Nota legal:</strong> {selectedService.detalle}
              </p>
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <a 
                href={`https://wa.me/${whatsappPhone}?text=${encodeURIComponent(`Hola, quiero iniciar el trámite de: ${selectedService.title}. ¿Cuáles son los requisitos exactos?`)}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  flex: 1,
                  backgroundColor: '#0f172a',
                  color: '#ffffff',
                  padding: '12px 20px',
                  borderRadius: '100px',
                  textAlign: 'center',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: 500
                }}
              >
                Iniciar Trámite por WhatsApp →
              </a>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer id="contacto" style={{ 
        borderTop: '1px solid #cbd5e1', 
        backgroundColor: '#f8fafc',
        padding: '50px 0 24px 0'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', width: '100%', padding: '0 clamp(16px, 4vw, 48px)', boxSizing: 'border-box' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '36px', 
            marginBottom: '40px',
            alignItems: 'stretch'
          }}>
            <div style={{ 
              border: '1px solid #cbd5e1', 
              borderRadius: '20px', 
              padding: '30px', 
              backgroundColor: '#ffffff',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <h3 style={{ fontSize: '20px', fontWeight: 600, margin: '0 0 20px 0', color: '#0f172a' }}>Oficina Córdoba</h3>
                <p style={{ fontSize: '14px', color: '#334155', margin: '0 0 12px 0', fontWeight: 300, lineHeight: 1.5 }}>
                  <strong style={{ fontWeight: 600, color: '#0f172a' }}>Dirección:</strong> Calle Linda 123, Ciudad de Córdoba
                </p>
                <p style={{ fontSize: '14px', color: '#334155', margin: '0 0 12px 0', fontWeight: 300, lineHeight: 1.5 }}>
                  <strong style={{ fontWeight: 600, color: '#0f172a' }}>Teléfono:</strong> 1234567890
                </p>
                <p style={{ fontSize: '14px', color: '#334155', margin: 0, fontWeight: 300, lineHeight: 1.5 }}>
                  <strong style={{ fontWeight: 600, color: '#0f172a' }}>Horario:</strong> Lun-Vie 8:30–14:30 | Lun-Jue 15:00–16:30
                </p>
              </div>

              <div style={{ marginTop: '24px' }}>
                <a 
                  href={`https://wa.me/${whatsappPhone}?text=${encodeURIComponent("Hola, quisiera agendar una visita o consulta.")}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ 
                    display: 'inline-block',
                    fontSize: '13px', 
                    fontWeight: 500, 
                    backgroundColor: '#0f172a', 
                    color: '#ffffff', 
                    padding: '10px 20px', 
                    borderRadius: '100px', 
                    textDecoration: 'none'
                  }}
                >
                  Agendar Visita / Consultar
                </a>
              </div>
            </div>

            <div style={{ 
              border: '1px solid #cbd5e1', 
              borderRadius: '20px', 
              overflow: 'hidden', 
              backgroundColor: '#ffffff',
              minHeight: '260px',
              display: 'flex'
            }}>
              <iframe 
                title="Ubicación Oficina Córdoba"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.9999999999995!2d-64.1888!3d-31.4201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDI1JzEyLjQiUyA2NMKwMTEnMTkuNyJX!5e0!3m2!1ses!2sar!4v1650000000000!5m2!1ses!2sar" 
                width="100%" 
                height="100%" 
                style={{ border: 0, minHeight: '260px', width: '100%' }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>

          <div style={{ 
            borderTop: '1px solid #cbd5e1', 
            paddingTop: '24px', 
            display: 'flex', 
            justifyContent: 'space-between', 
            fontSize: '13px', 
            color: '#64748b', 
            fontWeight: 300,
            flexWrap: 'wrap', 
            gap: '12px' 
          }}>
            <p style={{ margin: 0 }}>© {new Date().getFullYear()} GESTOR — Todos los derechos reservados.</p>
            <p style={{ margin: 0 }}>Córdoba e Interior</p>
          </div>
        </div>
      </footer>

      {/* BOTÓN FLOTANTE WHATSAPP */}
      <a 
        href={`https://wa.me/${whatsappPhone}?text=${encodeURIComponent("Hola, quisiera realizar una consulta.")}`}
        target="_blank"
        rel="noopener noreferrer"
        title="Consultar por WhatsApp"
        aria-label="Consultar por WhatsApp"
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          width: '50px',
          height: '50px',
          backgroundColor: '#0f172a',
          color: '#ffffff',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 6px 16px rgba(0,0,0,0.15)',
          textDecoration: 'none',
          transition: 'transform 0.2s ease, background-color 0.2s ease',
          zIndex: 1000
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.08)';
          e.currentTarget.style.backgroundColor = '#25D366';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.backgroundColor = '#0f172a';
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
      </a>

    </div>
  );
}