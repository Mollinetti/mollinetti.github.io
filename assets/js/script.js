'use strict';

// Translations object
const translations = {
  en: {
    'lang-label': 'English',
    'show-contacts': 'Show Contacts',
    'job-title': 'AI Manager <br> Leading AI Development Teams <br> Research & Development in AI',
    'email-label': 'Email',
    'phone-label': 'Phone',
    'location-label': 'Location',
    'nav-about': 'About',
    'nav-resume': 'Resume',
    'nav-portfolio': 'Portfolio',
    'nav-publications': 'Publications',
    'nav-contact': 'Contact',
    'about-title': 'About me',
    'about-text-1': 'I am an AI Manager and researcher born in Belém Do Pará, Brazil, working and living for more than 10 years in Japan. Holding a Ph.D in Engineering from the University of Tsukuba, I currently lead AI development teams at Nohara Group, Inc., driving digital transformation in the construction industry through AI-powered solutions for Building Information Modeling (BIM) and operational workflows.',
    'about-text-2': 'I have a strong research background from my Master\'s and Ph.D. studies, with extensive knowledge in applied mathematics, operations research, statistics, and experimental design. I have authored several scientific articles. With over 8 years of professional experience in data science, machine learning engineering, and AI leadership, I have developed and analyzed machine learning applications across healthcare, logistics, weather forecasting, and construction. I lead company-wide AI education initiatives and implement automation solutions to eliminate repetitive tasks and boost efficiency. My expertise spans Generative AI, Agentic AI, Machine Learning, and team management, successfully delivering high-quality products on time.',
    'expertises-title': 'Expertises / Hobbies',
    'service-ai-title': 'AI & ML Engineering',
    'service-ai-text': 'Leveraging and fine-tuning models for applications of many fields.',
    'service-backend-title': 'Backend development',
    'service-backend-text': 'Development of API to interface AI services with websites.',
    'service-data-title': 'Data Science & Analysis',
    'service-data-text': 'Sound statistical analysis to extract meaningful results and insights.',
    'service-genai-title': 'Generative AI',
    'service-genai-text': 'State-of-the-art Generative AI fine-tuning for text and image generation.',
    'service-game-title': 'Game Development',
    'service-game-text': 'Retro games from many genres that employ a degree of AI knowledge.',
    'service-tarot-title': 'Tarot Reading',
    'service-tarot-text': 'Fortune telling from the patterns described by each card.',
    'languages-title': 'Programming Languages',
    'lang-python-text': 'Data analysis and statistics; ML model creation and tuning; Generative AI leveraging.',
    'lang-r-text': 'Statistical analysis and experimental designs. Creation of interactive plots.',
    'lang-csharp-text': 'Game development using engines such as unreal and godot. Integration of AI to games.',
    'lang-js-text': 'Creation of API that integrate AI applications to be used in web services.',
    'partnerships-title': 'Partnerships',
    'resume-title': 'Resume',
    'education-title': 'Education',
    'experience-title': 'Experience',
    'edu-phd-title': 'Doctor of Philosophy (Ph.D) in Engineering <br> University of Tsukuba',
    'edu-phd-text': 'Worked under the Laboratory of Systems Optimization. Conducted research in the field of nonlinear optimization, hyperparameter optimization and bayesian statistics.',
    'edu-msc-title': 'Masters Degree (M.Sc) in Information Engineering <br> University of Tsukuba',
    'edu-msc-text': 'Worked under the Laboratory of Systems Optimization. Conducted research in the field of nonlinear optimization, operations research and scheduling problems.',
    'edu-ba-title': 'Bachelors Degree (B.A) in Computer Science <br> University Centre of Pará (CESUPA)',
    'edu-ba-text': 'Graduated as the first of the class of 2014. Conducted research under the Laboratory of Natural Computation (LCN) in the field of evolutionary computation and swarm optimization.',
    'exp-ai-manager-title': 'AI Manager <br> Nohara Group, Inc.',
    'exp-ai-manager-text': 'Driving digital transformation in the construction industry by leveraging AI to revolutionize Building Information Modeling (BIM) and operational workflows. Leading company-wide AI education initiatives and implementing automation solutions to eliminate repetitive tasks, boost efficiency, and unlock innovation across all project stages.',
    'exp-mti-title': 'Project Team Lead <br> MTI ltd.',
    'exp-mti-text': 'Lead a initiative to train junior Data scientists to full positions by administering courses and practical exercises for small teams of up to 10 people. Lead a small team to conduct research on Large Language Models to build knowledge graph databases to provide a knowledge base for a chatbot to provide business information to many departments of a large scale shipping company. Lead a small team to migrate an application of booking forecast forecast of shipping containers to a working pipeline. Co-developed image processing techniques for the task of rust, concrete cracks and bolt-nuts detection in telecommunication towers from drone pictures. Focused on client-client relations to educate the client on the scalability and usability of the project. Co-Developed techniques based on machine learning for the creation of weather synthetic data generated from two simultaneous radars of different frequencies. Developed algorithms based on Neural Networks for short term weather forecast in the region of Japan.',
    'exp-censipam-title': 'Postdoctorate Research Fellow <br> Management and Operations Center of the System of Protection of the Amazon (CENSIPAM)',
    'exp-censipam-text': 'Worked on the project of the Autonomous Oil spill detection system of the amazonian sovereign marine area. Co-development together with researchers a image detection system based on Deep Learning to detect oil spills and foreign vessels in the sea from satellite images Successfully improved the system accuracy by more than 10% by integrating ensemble learning methods to the current learning algorithm. Presented the improvements of the system to the Ministry of Defense of Brazil.',
    'exp-plimes-senior-title': 'Senior Data Analyst <br> PLIMES Inc.',
    'exp-plimes-senior-text': 'Using knowledge obtained from working experience and academic years, developed solutions for GOKURI, a neckband wearable device that uses machine learning techniques such as deep learning to detect signs of dysphagia during mealtime activity. Technologies such as Python, R and its packages for machine learning such as TensorFlow, TFLite and AutoML were extensively used. Engaged in integrating cough detection to the system.',
    'exp-plimes-title': 'Data Analyst <br> PLIMES Inc.',
    'exp-plimes-text': 'Worked as a data analyst and machine learning engineer, developing solutions based on deep learning for GOKURI, a wearable neckband that detects swallowing activity to monitor risk of dysphagia. Technologies employed: Python, R, Matlab, TensorFlow and TensorFlowLite. Developed a Bayesian learning method to improve the hyperparameters of the underlying neural network. Improved the detection and recognition rate of swallows by tuning and optimizing the neural network architecture.',
    'exp-ufra-title': 'Research Fellow <br> Laboratory of Computational Technologies, Ufra - Universidade Federal Rural Da Amazonia',
    'exp-ufra-text': 'Conducting and mentoring graduate students in research in the following fields: Swarm Intelligence; Dynamic Systems; Game Theory; Supervised and Reinforcement Learning. Research focused on the protection and preservation of the region of the Amazon Rainforest. Six co-authored papers and two co-authored Scientific Journals.',
    'skills-title': 'My skills',
    'skill-ml': 'Machine Learning and Statistics',
    'skill-programming': 'Programming',
    'skill-genai': 'Generative AI',
    'skill-leadership': 'Leadership and Team Management',
    'portfolio-title': 'Portfolio',
    'filter-all': 'All',
    'filter-game': 'Game design',
    'filter-apps': 'Applications',
    'filter-research': 'Research',
    'select-category': 'Select category',
    'publications-title': 'Publications',
    'contact-title': 'Contact',
    'contact-text': 'Feel free to reach out if you\'d like to collaborate, discuss research opportunities, or just connect. I\'m always open to interesting conversations about AI, data science, or technology in general.',
    'form-title': 'Contact Form',
    'form-name': 'Full name',
    'form-email': 'Email address',
    'form-message': 'Your Message',
    'form-send': 'Send Message'
  },
  pt: {
    'lang-label': 'Português',
    'show-contacts': 'Mostrar Contatos',
    'job-title': 'Gerente de IA <br> Liderando Equipes de Desenvolvimento de IA <br> Pesquisa & Desenvolvimento em IA',
    'email-label': 'E-mail',
    'phone-label': 'Telefone',
    'location-label': 'Localização',
    'nav-about': 'Sobre',
    'nav-resume': 'Currículo',
    'nav-portfolio': 'Portfólio',
    'nav-publications': 'Publicações',
    'nav-contact': 'Contato',
    'about-title': 'Sobre mim',
    'about-text-1': 'Sou um Gerente de IA e pesquisador nascido em Belém do Pará, Brasil, trabalhando e vivendo há mais de 10 anos no Japão. Com doutorado em Engenharia pela Universidade de Tsukuba, atualmente lidero equipes de desenvolvimento de IA na Nohara Group, Inc., impulsionando a transformação digital na indústria da construção através de soluções baseadas em IA para Building Information Modeling (BIM) e fluxos de trabalho operacionais.',
    'about-text-2': 'Tenho uma sólida formação em pesquisa de meus estudos de mestrado e doutorado, com amplo conhecimento em matemática aplicada, pesquisa operacional, estatística e planejamento experimental. Publiquei vários artigos científicos. Com mais de 8 anos de experiência profissional em ciência de dados, engenharia de machine learning e liderança em IA, desenvolvi e analisei aplicações de machine learning em saúde, logística, previsão do tempo e construção. Lidero iniciativas de educação em IA em toda a empresa e implemento soluções de automação para eliminar tarefas repetitivas e aumentar a eficiência. Minha expertise abrange IA Generativa, IA Agêntica, Machine Learning e gestão de equipes, entregando com sucesso produtos de alta qualidade no prazo.',
    'expertises-title': 'Especialidades / Hobbies',
    'service-ai-title': 'Engenharia de IA & ML',
    'service-ai-text': 'Aproveitamento e ajuste fino de modelos para aplicações em diversos campos.',
    'service-backend-title': 'Desenvolvimento Backend',
    'service-backend-text': 'Desenvolvimento de APIs para integrar serviços de IA com websites.',
    'service-data-title': 'Ciência de Dados & Análise',
    'service-data-text': 'Análise estatística sólida para extrair resultados e insights significativos.',
    'service-genai-title': 'IA Generativa',
    'service-genai-text': 'Ajuste fino de IA Generativa de última geração para geração de texto e imagem.',
    'service-game-title': 'Desenvolvimento de Jogos',
    'service-game-text': 'Jogos retrô de diversos gêneros que empregam conhecimento de IA.',
    'service-tarot-title': 'Leitura de Tarô',
    'service-tarot-text': 'Leitura de sorte a partir dos padrões descritos por cada carta.',
    'languages-title': 'Linguagens de Programação',
    'lang-python-text': 'Análise de dados e estatística; criação e ajuste de modelos de ML; aproveitamento de IA Generativa.',
    'lang-r-text': 'Análise estatística e planejamentos experimentais. Criação de gráficos interativos.',
    'lang-csharp-text': 'Desenvolvimento de jogos usando engines como Unreal e Godot. Integração de IA em jogos.',
    'lang-js-text': 'Criação de APIs que integram aplicações de IA para uso em serviços web.',
    'partnerships-title': 'Parcerias',
    'resume-title': 'Currículo',
    'education-title': 'Educação',
    'experience-title': 'Experiência',
    'edu-phd-title': 'Doutorado (Ph.D) em Engenharia <br> Universidade de Tsukuba',
    'edu-phd-text': 'Trabalhei no Laboratório de Otimização de Sistemas. Realizei pesquisas na área de otimização não linear, otimização de hiperparâmetros e estatística bayesiana.',
    'edu-msc-title': 'Mestrado (M.Sc) em Engenharia da Informação <br> Universidade de Tsukuba',
    'edu-msc-text': 'Trabalhei no Laboratório de Otimização de Sistemas. Realizei pesquisas na área de otimização não linear, pesquisa operacional e problemas de escalonamento.',
    'edu-ba-title': 'Bacharelado (B.A) em Ciência da Computação <br> Centro Universitário do Pará (CESUPA)',
    'edu-ba-text': 'Formei-me como primeiro da turma de 2014. Realizei pesquisas no Laboratório de Computação Natural (LCN) na área de computação evolutiva e otimização por enxame.',
    'exp-ai-manager-title': 'Gerente de IA <br> Nohara Group, Inc.',
    'exp-ai-manager-text': 'Impulsionando a transformação digital na indústria da construção através do uso de IA para revolucionar Building Information Modeling (BIM) e fluxos de trabalho operacionais. Liderando iniciativas de educação em IA em toda a empresa e implementando soluções de automação para eliminar tarefas repetitivas, aumentar a eficiência e desbloquear inovação em todas as etapas do projeto.',
    'exp-mti-title': 'Líder de Equipe de Projeto <br> MTI ltd.',
    'exp-mti-text': 'Liderei uma iniciativa para treinar cientistas de dados júnior para posições completas administrando cursos e exercícios práticos para pequenas equipes de até 10 pessoas. Liderei uma pequena equipe para conduzir pesquisas sobre Modelos de Linguagem Grande para construir bancos de dados de grafos de conhecimento para fornecer uma base de conhecimento para um chatbot fornecer informações comerciais para muitos departamentos de uma grande empresa de transporte. Liderei uma pequena equipe para migrar uma aplicação de previsão de reserva de contêineres de transporte para um pipeline funcional. Co-desenvolvi técnicas de processamento de imagem para a tarefa de detecção de ferrugem, rachaduras de concreto e parafusos em torres de telecomunicações a partir de imagens de drones. Foquei em relações cliente-cliente para educar o cliente sobre a escalabilidade e usabilidade do projeto. Co-desenvolvi técnicas baseadas em machine learning para a criação de dados sintéticos climáticos gerados a partir de dois radares simultâneos de diferentes frequências. Desenvolvi algoritmos baseados em Redes Neurais para previsão climática de curto prazo na região do Japão.',
    'exp-censipam-title': 'Pesquisador Pós-Doutor <br> Centro de Gestão e Operações do Sistema de Proteção da Amazônia (CENSIPAM)',
    'exp-censipam-text': 'Trabalhei no projeto do sistema autônomo de detecção de derramamento de óleo da área marítima soberana amazônica. Co-desenvolvimento junto com pesquisadores de um sistema de detecção de imagem baseado em Deep Learning para detectar derramamentos de óleo e embarcações estrangeiras no mar a partir de imagens de satélite. Melhorei com sucesso a precisão do sistema em mais de 10% integrando métodos de ensemble learning ao algoritmo de aprendizado atual. Apresentei as melhorias do sistema ao Ministério da Defesa do Brasil.',
    'exp-plimes-senior-title': 'Analista de Dados Sênior <br> PLIMES Inc.',
    'exp-plimes-senior-text': 'Usando conhecimento obtido de experiência profissional e anos acadêmicos, desenvolvi soluções para GOKURI, um dispositivo vestível tipo colar que usa técnicas de machine learning como deep learning para detectar sinais de disfagia durante a atividade de refeição. Tecnologias como Python, R e seus pacotes para machine learning como TensorFlow, TFLite e AutoML foram extensivamente usados. Envolvi-me na integração de detecção de tosse ao sistema.',
    'exp-plimes-title': 'Analista de Dados <br> PLIMES Inc.',
    'exp-plimes-text': 'Trabalhei como analista de dados e engenheiro de machine learning, desenvolvendo soluções baseadas em deep learning para GOKURI, um colar vestível que detecta atividade de deglutição para monitorar risco de disfagia. Tecnologias empregadas: Python, R, Matlab, TensorFlow e TensorFlowLite. Desenvolvi um método de aprendizado bayesiano para melhorar os hiperparâmetros da rede neural subjacente. Melhorei a taxa de detecção e reconhecimento de deglutições ajustando e otimizando a arquitetura da rede neural.',
    'exp-ufra-title': 'Pesquisador <br> Laboratório de Tecnologias Computacionais, Ufra - Universidade Federal Rural da Amazônia',
    'exp-ufra-text': 'Conduzindo e orientando estudantes de pós-graduação em pesquisa nos seguintes campos: Inteligência de Enxame; Sistemas Dinâmicos; Teoria dos Jogos; Aprendizado Supervisionado e por Reforço. Pesquisa focada na proteção e preservação da região da Floresta Amazônica. Seis artigos co-autorados e dois periódicos científicos co-autorados.',
    'skills-title': 'Minhas habilidades',
    'skill-ml': 'Machine Learning e Estatística',
    'skill-programming': 'Programação',
    'skill-genai': 'IA Generativa',
    'skill-leadership': 'Liderança e Gestão de Equipes',
    'portfolio-title': 'Portfólio',
    'filter-all': 'Todos',
    'filter-game': 'Design de jogos',
    'filter-apps': 'Aplicações',
    'filter-research': 'Pesquisa',
    'select-category': 'Selecionar categoria',
    'publications-title': 'Publicações',
    'contact-title': 'Contato',
    'contact-text': 'Sinta-se à vontade para entrar em contato se quiser colaborar, discutir oportunidades de pesquisa ou apenas conectar. Estou sempre aberto a conversas interessantes sobre IA, ciência de dados ou tecnologia em geral.',
    'form-title': 'Formulário de Contato',
    'form-name': 'Nome completo',
    'form-email': 'Endereço de e-mail',
    'form-message': 'Sua Mensagem',
    'form-send': 'Enviar Mensagem'
  }
};

// Current language
let currentLang = localStorage.getItem('language') || 'en';

// Language switching function
function switchLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('language', lang);
  
  // Update HTML lang attribute
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('data-lang', lang);
  
  // Update all elements with data-i18n attribute
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      element.innerHTML = translations[lang][key];
    }
  });
  
  // Update placeholder attributes
  const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
  placeholderElements.forEach(element => {
    const key = element.getAttribute('data-i18n-placeholder');
    if (translations[lang] && translations[lang][key]) {
      element.setAttribute('placeholder', translations[lang][key]);
    }
  });
  
  // Update language button text
  const langBtn = document.querySelector('[data-lang-btn]');
  if (langBtn) {
    const langLabel = langBtn.querySelector('[data-i18n="lang-label"]');
    if (langLabel) {
      langLabel.textContent = translations[lang]['lang-label'];
    }
  }
}

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// filter function (utility function, can be at top level)
const filterFunc = function (selectedValue) {
  const filterItems = document.querySelectorAll("[data-filter-item]");
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  // 1. Initialize language first
  switchLanguage(currentLang);
  
  // 2. Initialize sidebar toggle
  const sidebar = document.querySelector("[data-sidebar]");
  const sidebarBtn = document.querySelector("[data-sidebar-btn]");
  if (sidebarBtn && sidebar) {
    sidebarBtn.addEventListener("click", function () { 
      elementToggleFunc(sidebar); 
    });
  }

  // 3. Initialize testimonials/modal
  const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
  const modalContainer = document.querySelector("[data-modal-container]");
  const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
  const overlay = document.querySelector("[data-overlay]");
  const modalImg = document.querySelector("[data-modal-img]");
  const modalTitle = document.querySelector("[data-modal-title]");
  const modalText = document.querySelector("[data-modal-text]");

  // modal toggle function
  const testimonialsModalFunc = function () {
    if (modalContainer && overlay) {
      modalContainer.classList.toggle("active");
      overlay.classList.toggle("active");
    }
  }

  // add click event to all modal items
  if (testimonialsItem.length > 0 && modalImg && modalTitle && modalText) {
    for (let i = 0; i < testimonialsItem.length; i++) {
      testimonialsItem[i].addEventListener("click", function () {
        const avatar = this.querySelector("[data-testimonials-avatar]");
        const title = this.querySelector("[data-testimonials-title]");
        const text = this.querySelector("[data-testimonials-text]");
        
        if (avatar) {
          modalImg.src = avatar.src;
          modalImg.alt = avatar.alt;
        }
        if (title) modalTitle.innerHTML = title.innerHTML;
        if (text) modalText.innerHTML = text.innerHTML;

        testimonialsModalFunc();
      });
    }
  }

  // add click event to modal close button
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", testimonialsModalFunc);
  }
  if (overlay) {
    overlay.addEventListener("click", testimonialsModalFunc);
  }

  // 4. Initialize filter/select
  const select = document.querySelector("[data-select]");
  const selectItems = document.querySelectorAll("[data-select-item]");
  const selectValue = document.querySelector("[data-selecct-value]");
  const filterBtn = document.querySelectorAll("[data-filter-btn]");

  if (select) {
    select.addEventListener("click", function () { 
      elementToggleFunc(this); 
    });
  }

  // add event in all select items
  if (selectItems.length > 0 && selectValue) {
    for (let i = 0; i < selectItems.length; i++) {
      selectItems[i].addEventListener("click", function () {
        let selectedValue = this.dataset.filter || this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        if (select) elementToggleFunc(select);
        filterFunc(selectedValue);
      });
    }
  }

  // add event in all filter button items for large screen
  if (filterBtn.length > 0 && selectValue) {
    let lastClickedBtn = filterBtn[0];
    for (let i = 0; i < filterBtn.length; i++) {
      filterBtn[i].addEventListener("click", function () {
        let selectedValue = this.dataset.filter || this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        filterFunc(selectedValue);

        lastClickedBtn.classList.remove("active");
        this.classList.add("active");
        lastClickedBtn = this;
      });
    }
  }

  // 5. Initialize contact form
  const form = document.querySelector("[data-form]");
  const formInputs = document.querySelectorAll("[data-form-input]");
  const formBtn = document.querySelector("[data-form-btn]");

  if (form && formInputs.length > 0 && formBtn) {
    // add event to all form input field
    for (let i = 0; i < formInputs.length; i++) {
      formInputs[i].addEventListener("input", function () {
        // check form validation
        if (form.checkValidity()) {
          formBtn.removeAttribute("disabled");
        } else {
          formBtn.setAttribute("disabled", "");
        }
      });
    }
  }

  // 6. Initialize navigation
  const navigationLinks = document.querySelectorAll("[data-nav-link]");
  const pages = document.querySelectorAll("[data-page]");

  if (navigationLinks.length > 0 && pages.length > 0) {
    // add event to all nav link
    for (let i = 0; i < navigationLinks.length; i++) {
      navigationLinks[i].addEventListener("click", function () {
        const targetPage = this.dataset.page;
        
        if (!targetPage) {
          console.warn("Navigation link missing data-page attribute");
          return;
        }

        // Remove active class from all pages and navigation links
        for (let j = 0; j < pages.length; j++) {
          pages[j].classList.remove("active");
        }
        for (let j = 0; j < navigationLinks.length; j++) {
          navigationLinks[j].classList.remove("active");
        }

        // Add active class to matching page
        let pageFound = false;
        for (let j = 0; j < pages.length; j++) {
          if (targetPage === pages[j].dataset.page) {
            pages[j].classList.add("active");
            pageFound = true;
            break;
          }
        }
        
        if (!pageFound) {
          console.warn("No page found with data-page='" + targetPage + "'");
        }

        // Add active class to clicked navigation link
        this.classList.add("active");
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  // 7. Initialize language switcher button
  const langBtn = document.querySelector('[data-lang-btn]');
  if (langBtn) {
    langBtn.addEventListener('click', function() {
      const newLang = currentLang === 'en' ? 'pt' : 'en';
      switchLanguage(newLang);
    });
  }
});