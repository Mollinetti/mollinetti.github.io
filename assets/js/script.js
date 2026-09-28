'use strict';

// Translations object
const translations = {
  en: {
    'lang-label': 'English',
    'theme-dark': 'Dark',
    'theme-light': 'Light',
    'theme-aria-dark': 'Switch to dark mode',
    'theme-aria-light': 'Switch to light mode',
    'show-contacts': 'Show Contacts',
    'job-title': 'AI Division Manager, Nohara Group <br> Ph.D. &mdash; Applied AI &amp; Optimization',
    'email-label': 'Email',
    'location-label': 'Location',
    'nav-about': 'About',
    'nav-resume': 'Resume',
    'nav-portfolio': 'Portfolio',
    'nav-publications': 'Publications',
    'nav-contact': 'Contact',
    'about-title': 'About me',
    'about-text-1': 'I am an AI leader and researcher, born in Bel&eacute;m do Par&aacute;, Brazil, and living in Japan since 2016. I hold a Ph.D. in Systems Engineering from the University of Tsukuba, and I now lead the AI division at Nohara Group &mdash; a construction group with over 300 years of history &mdash; running 9+ concurrent projects across Japan, Singapore, and Indonesia.',
    'about-text-2': 'My work sits across three pillars that keep feeding each other: research, engineering, and management. I started as a researcher, publishing on evolutionary computation and nonlinear optimization and securing a $200,000 CNPq grant. I became an engineer who ships production systems &mdash; deep-learning models at 95% accuracy, autonomous detection pipelines, weather forecasting inside aviation maps. Today I combine machine learning, optimization, and agentic AI with Lean practice to deliver measurable business results.',
    'service-ai-title': 'AI & ML Engineering',
    'service-ai-text': 'Leveraging and fine-tuning models for applications of many fields.',
    'service-backend-text': 'Development of API to interface AI services with websites.',
    'service-data-title': 'Data Science & Analysis',
    'service-data-text': 'Sound statistical analysis to extract meaningful results and insights.',
    'service-genai-title': 'Generative AI',
    'service-genai-text': 'State-of-the-art Generative AI fine-tuning for text and image generation.',
    'service-game-title': 'Game Development',
    'service-game-text': 'Retro games from many genres that employ a degree of AI knowledge.',
    'service-tarot-title': 'Tarot Reading',
    'service-tarot-text': 'Fortune telling from the patterns described by each card.',
    'resume-title': 'Resume',
    'education-title': 'Education',
    'experience-title': 'Experience',
    'edu-phd-title': 'Ph.D. in Systems Engineering <br> University of Tsukuba',
    'edu-phd-text': 'Laboratory of Systems Optimization. Thesis: <em>Deterministic Methods for Non-Deterministic Optimization Algorithms</em>. Research in nonlinear optimization, hyperparameter optimization, and Bayesian statistics.',
    'edu-msc-title': 'M.Sc. in Computer Science <br> University of Tsukuba',
    'edu-msc-text': 'Laboratory of Systems Optimization. Thesis: <em>A Bee-Restarting Algorithm for the Nelder&ndash;Mead Descent Method</em>. Research in nonlinear optimization, operations research, and scheduling problems.',
    'edu-ba-title': 'B.A. in Computer Science <br> University Centre of Par&aacute; (CESUPA)',
    'edu-ba-text': 'Graduated first in class. Thesis: <em>Earthquake prediction model using Evolutionary Computation</em>. Research at the Laboratory of Natural Computation (LCN) in evolutionary computation and swarm optimization.',
    'exp-censipam-title': 'Postdoctoral Researcher <br> CENSIPAM &mdash; Brazil',
    'exp-censipam-text': 'Autonomous oil-spill and foreign-vessel detection over Brazil&rsquo;s sovereign marine area, from satellite imagery (UNet + ensemble classifiers). Improved system accuracy by more than 10% and presented the results to the Brazilian Ministry of Defense.',
    'exp-plimes-title': 'AI Engineer <br> Plimes Inc. &mdash; Tsukuba, Japan',
    'exp-plimes-text': 'Built cough and swallow recognition for GOKURI, a neckband wearable that monitors dysphagia risk, reaching 95% accuracy through novel framing and wavelet denoising. Developed a Bayesian method for tuning the underlying network&rsquo;s hyperparameters.',
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
    'form-send': 'Send Message',
    'about-text-3': 'I also write Nohara\'s AI governance frameworks, run reskilling and AI literacy programmes, and coach data-science teams across three countries.',
    'stats-title': 'Highlights',
    'stat-outsourcing': 'outsourcing costs avoided',
    'stat-revenue': 'projected annual revenue uplift',
    'stat-spec': 'less manual specification entry',
    'stat-papers': 'peer-reviewed publications',
    'stat-grant': 'CNPq research grant secured',
    'stat-countries': 'countries with teams led',
    'offer-title': 'Work with me',
    'offer-intro': 'Available for consulting engagements and selected projects &mdash; remote or on-site, worldwide.',
    'offer-strategy-title': 'AI strategy &amp; governance',
    'offer-strategy-text': 'Company-wide AI policies, tooling guidelines and skill maps that let an organisation adopt AI safely &mdash; the frameworks I wrote for Nohara Group.',
    'offer-poc-title': 'Proof-of-concept delivery',
    'offer-poc-text': 'From a loosely defined problem to a working prototype, fast. Nohara&rsquo;s gypsum-nesting PoC reached 80% yield parity.',
    'offer-opt-title': 'Optimization &amp; operations research',
    'offer-opt-text': 'Scheduling, allocation and constraint programming &mdash; including a container-scheduling agent that cut wait times by 30%.',
    'offer-training-title': 'AI training &amp; reskilling',
    'offer-training-text': 'Bootcamps and literacy programmes for teams, from a four-week reskilling bootcamp to a 10-person data-scientist programme.',
    'offer-cta': 'Start a conversation',
    'availability-label': 'Availability',
    'availability-value': 'Open to consulting &amp; selected projects',
    'hobbies-title': 'Outside work',
    'present': 'Present',
    'concurrent': 'concurrent',
    'download-cv': 'Download full CV',
    'awards-title': 'Awards &amp; Certifications',
    'languages-spoken-title': 'Languages',
    'exp-nohara-title': 'AI Division Manager <br> Nohara Group &mdash; Tokyo, Japan',
    'exp-nohara-text': 'Leads the AI division inside Technology Headquarters: a team of 3&ndash;5 (three of them PhDs), 9+ concurrent projects, and coordination across six business units in Japan, Singapore, and Indonesia.',
    'exp-nohara-p1': '<strong>Gypsum board allocation &amp; nesting optimization</strong> &mdash; neuro-symbolic engine (OR-Tools CP-SAT + Swin Transformer V2 + Qwen-2.5-32B) on a secure air-gapped cluster. PoC reached 80% yield parity, avoiding &yen;40M in outsourced CAD development.',
    'exp-nohara-p2': '<strong>AI-powered material quantity takeoff</strong> &mdash; automated interior material calculation from contractor specifications. Lead time cut from five days to under two; up to &yen;900M projected annual revenue uplift and &yen;25M saved against outsourcing.',
    'exp-nohara-p3': '<strong>Hybrid OCR + LLM delivery-sheet pipeline</strong> &mdash; extracts six mandatory fields from low-quality handwritten faxes; Streamlit dashboard on AWS, with 200K-row historical analysis for loss reduction.',
    'exp-nohara-p4': '<strong>Agentic AI for legacy estimation logic</strong> &mdash; Copilot Studio agents analysing VBA macros and BIM plugin workflows inside a secure local-AI environment.',
    'exp-nohara-p5': '<strong>Governance and enablement</strong> &mdash; authored company-wide AI policies, Tooling &amp; Engineering Guidelines, and the AI Skill Map; runs a four-week reskilling bootcamp and the Nohara AI Academy prototype.',
    'exp-mti-lead-title': 'AI Team Leader <br> MTI Ltd. &mdash; Tokyo, Japan',
    'exp-mti-lead-p1': 'Diffusion-network manga storyboarding: 45% productivity gain and 10% sales lift.',
    'exp-mti-lead-p2': 'GPT distillation for embedded devices; graph-based agentic AI for industrial machinery.',
    'exp-mti-lead-p3': 'Productised a 10-person data-scientist training programme.',
    'exp-mti-senior-title': 'Senior Data Scientist <br> MTI Ltd. &mdash; Tokyo, Japan',
    'exp-mti-senior-p1': 'Japan&ndash;Vietnam&ndash;Singapore container-scheduling agent: 30% reduction in wait time.',
    'exp-mti-senior-p2': 'Rain-forecast system integrated into aviation maps, at 95% accuracy.',
    'exp-mti-senior-p3': 'Three years leading coaching and training for the Vietnam team.',
    'exp-labtec-title': 'Research Fellow <br> Lab-TeC, Universidade Federal Rural da Amaz&ocirc;nia &mdash; Brazil',
    'exp-labtec-text': 'Supervises researchers from undergraduate through doctoral level in swarm intelligence, dynamic systems, game theory, and reinforcement learning. Secured a $200,000 CNPq grant for Amazon lightning-detection research, leading a 12-person team with UFPA and the University of Arizona.',
    'stack-languages': 'Languages',
    'stack-genai': 'Generative &amp; Agentic AI',
    'stack-ml': 'Machine Learning',
    'stack-opt': 'Optimization &amp; OR',
    'stack-cloud': 'Cloud &amp; Platforms',
    'stack-domain': 'Domain &amp; Ways of Working',
    'award-aws': '<strong>AWS Solutions Architect &ndash; Associate</strong>, Amazon Web Services',
    'award-cnpq': '<strong>Project Grant for Research</strong> ($200,000), National Council of Scientific and Technological Development (CNPq), Brazil',
    'award-bracis': '<strong>Best Research Paper</strong>, Brazilian Conference on Intelligent Systems (BRACIS)',
    'award-toeic': '<strong>TOEIC Written Test</strong> &mdash; 990/990',
    'award-first': '<strong>First in Class</strong>, University Centre of Par&aacute;',
    'lang-en': 'English &mdash; Native',
    'lang-pt': 'Portuguese &mdash; Native',
    'lang-ja': 'Japanese &mdash; Fluent (N1 equivalent)',
    'lang-es': 'Spanish &mdash; Fluent',
    'lang-it': 'Italian &mdash; Intermediate',
    'proj-rain': 'Short-term rain forecasting for Japan using neural networks, integrated into aviation maps at 95% accuracy.',
    'proj-movement': 'Multilinear subspace methods for recognising movement from tensorial video data.',
    'proj-lightning': 'CNPq-funded lightning detection across the Amazon, with UFPA and the University of Arizona.',
    'proj-hyper': 'Bayesian and deterministic methods for tuning neural network hyperparameters - the core of my Ph.D.',
    'proj-spheres': 'A genetic algorithm you can watch converge, written for the PICO-8 fantasy console.',
    'proj-nietzche': 'A daily dose of artificial nihilism: an LLM fine-tuned on Nietzsche\'s works.',
    'proj-gokuri': 'Swallow and cough recognition for a neckband wearable that monitors dysphagia risk, at 95% accuracy.',
    'proj-helix': 'A small arcade game built around DNA-strand mechanics, released on itch.io.',
    'proj-rioss': 'Autonomous oil-spill and vessel detection from satellite imagery for Brazil\'s marine territory (UNet + ensembles, +10% accuracy).',
    'proj-belem': 'A fine-tuned small-scale LLM acting as an AI tour guide for Bel&eacute;m do Par&aacute;, host city of COP30. Builds custom routes and recommendations in 10+ languages. In production.',
    'publications-intro': 'Peer-reviewed work in evolutionary computation, nonlinear optimization, and machine learning. Every entry links to its DOI.',
    'pub-journal': 'Journal',
    'pub-conference': 'Conference',
    'pub-profile-semantic': 'Semantic Scholar',
    'form-status': 'Opening your email app with the message ready to send.',
    'service-backend-title': 'Backend Development',
    'expertises-title': 'What I do',
    'skills-title': 'Technical stack'
  },
  pt: {
    'lang-label': 'Português',
    'theme-dark': 'Escuro',
    'theme-light': 'Claro',
    'theme-aria-dark': 'Mudar para o modo escuro',
    'theme-aria-light': 'Mudar para o modo claro',
    'show-contacts': 'Mostrar Contatos',
    'job-title': 'Gerente da Divis&atilde;o de IA, Nohara Group <br> Ph.D. &mdash; IA Aplicada e Otimiza&ccedil;&atilde;o',
    'email-label': 'E-mail',
    'location-label': 'Localização',
    'nav-about': 'Sobre',
    'nav-resume': 'Currículo',
    'nav-portfolio': 'Portfólio',
    'nav-publications': 'Publicações',
    'nav-contact': 'Contato',
    'about-title': 'Sobre mim',
    'about-text-1': 'Sou um l&iacute;der e pesquisador de IA, nascido em Bel&eacute;m do Par&aacute;, Brasil, e vivendo no Jap&atilde;o desde 2016. Tenho doutorado em Engenharia de Sistemas pela Universidade de Tsukuba e hoje lidero a divis&atilde;o de IA da Nohara Group &mdash; um grupo da constru&ccedil;&atilde;o com mais de 300 anos de hist&oacute;ria &mdash; conduzindo mais de 9 projetos simult&acirc;neos no Jap&atilde;o, Singapura e Indon&eacute;sia.',
    'about-text-2': 'Meu trabalho se apoia em tr&ecirc;s pilares que se retroalimentam: pesquisa, engenharia e gest&atilde;o. Comecei como pesquisador, publicando em computa&ccedil;&atilde;o evolutiva e otimiza&ccedil;&atilde;o n&atilde;o linear e conquistando um financiamento CNPq de US$ 200.000. Tornei-me um engenheiro que entrega sistemas em produ&ccedil;&atilde;o &mdash; modelos de deep learning com 95% de acur&aacute;cia, pipelines aut&ocirc;nomos de detec&ccedil;&atilde;o, previs&atilde;o do tempo dentro de mapas de avia&ccedil;&atilde;o. Hoje combino aprendizado de m&aacute;quina, otimiza&ccedil;&atilde;o e IA ag&ecirc;ntica com pr&aacute;ticas Lean para entregar resultados de neg&oacute;cio mensur&aacute;veis.',
    'service-ai-title': 'Engenharia de IA & ML',
    'service-ai-text': 'Aproveitamento e ajuste fino de modelos para aplicações em diversos campos.',
    'service-backend-text': 'Desenvolvimento de APIs para integrar serviços de IA com websites.',
    'service-data-title': 'Ciência de Dados & Análise',
    'service-data-text': 'Análise estatística sólida para extrair resultados e insights significativos.',
    'service-genai-title': 'IA Generativa',
    'service-genai-text': 'Ajuste fino de IA Generativa de última geração para geração de texto e imagem.',
    'service-game-title': 'Desenvolvimento de Jogos',
    'service-game-text': 'Jogos retrô de diversos gêneros que empregam conhecimento de IA.',
    'service-tarot-title': 'Leitura de Tarô',
    'service-tarot-text': 'Leitura de sorte a partir dos padrões descritos por cada carta.',
    'resume-title': 'Currículo',
    'education-title': 'Educação',
    'experience-title': 'Experiência',
    'edu-phd-title': 'Doutorado em Engenharia de Sistemas <br> Universidade de Tsukuba',
    'edu-phd-text': 'Laborat&oacute;rio de Otimiza&ccedil;&atilde;o de Sistemas. Tese: <em>Deterministic Methods for Non-Deterministic Optimization Algorithms</em>. Pesquisa em otimiza&ccedil;&atilde;o n&atilde;o linear, otimiza&ccedil;&atilde;o de hiperpar&acirc;metros e estat&iacute;stica bayesiana.',
    'edu-msc-title': 'Mestrado em Ci&ecirc;ncia da Computa&ccedil;&atilde;o <br> Universidade de Tsukuba',
    'edu-msc-text': 'Laborat&oacute;rio de Otimiza&ccedil;&atilde;o de Sistemas. Tese: <em>A Bee-Restarting Algorithm for the Nelder&ndash;Mead Descent Method</em>. Pesquisa em otimiza&ccedil;&atilde;o n&atilde;o linear, pesquisa operacional e problemas de escalonamento.',
    'edu-ba-title': 'Bacharelado em Ci&ecirc;ncia da Computa&ccedil;&atilde;o <br> Centro Universit&aacute;rio do Par&aacute; (CESUPA)',
    'edu-ba-text': 'Formado como primeiro da turma. Monografia: <em>Earthquake prediction model using Evolutionary Computation</em>. Pesquisa no Laborat&oacute;rio de Computa&ccedil;&atilde;o Natural (LCN) em computa&ccedil;&atilde;o evolutiva e otimiza&ccedil;&atilde;o por enxames.',
    'exp-censipam-title': 'Pesquisador de P&oacute;s-Doutorado <br> CENSIPAM &mdash; Brasil',
    'exp-censipam-text': 'Detec&ccedil;&atilde;o aut&ocirc;noma de manchas de &oacute;leo e embarca&ccedil;&otilde;es estrangeiras na &aacute;rea marinha soberana do Brasil, a partir de imagens de sat&eacute;lite (UNet + classificadores em ensemble). Melhorou a acur&aacute;cia do sistema em mais de 10% e apresentou os resultados ao Minist&eacute;rio da Defesa do Brasil.',
    'exp-plimes-title': 'Engenheiro de IA <br> Plimes Inc. &mdash; Tsukuba, Jap&atilde;o',
    'exp-plimes-text': 'Desenvolveu reconhecimento de tosse e degluti&ccedil;&atilde;o para o GOKURI, um colar vest&iacute;vel que monitora risco de disfagia, atingindo 95% de acur&aacute;cia com t&eacute;cnicas in&eacute;ditas de janelamento e remo&ccedil;&atilde;o de ru&iacute;do por wavelets. Criou um m&eacute;todo bayesiano para ajustar os hiperpar&acirc;metros da rede subjacente.',
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
    'form-send': 'Enviar Mensagem',
    'about-text-3': 'Também escrevo os frameworks de governança de IA da Nohara, conduzo programas de requalificação e letramento em IA, e oriento equipes de ciência de dados em três países.',
    'stats-title': 'Destaques',
    'stat-outsourcing': 'em custos de terceirização evitados',
    'stat-revenue': 'de aumento de receita anual projetado',
    'stat-spec': 'menos entrada manual de especificações',
    'stat-papers': 'publicações revisadas por pares',
    'stat-grant': 'de financiamento de pesquisa CNPq',
    'stat-countries': 'países com equipes lideradas',
    'offer-title': 'Trabalhe comigo',
    'offer-intro': 'Disponível para consultoria e projetos selecionados &mdash; remoto ou presencial, em qualquer lugar do mundo.',
    'offer-strategy-title': 'Estratégia e governança de IA',
    'offer-strategy-text': 'Políticas de IA, diretrizes de ferramentas e mapas de competências que permitem a uma organização adotar IA com segurança &mdash; os frameworks que escrevi para a Nohara Group.',
    'offer-poc-title': 'Entrega de provas de conceito',
    'offer-poc-text': 'De um problema mal definido a um protótipo funcional, com rapidez. A PoC de nesting de gesso da Nohara atingiu 80% de paridade de aproveitamento.',
    'offer-opt-title': 'Otimização e pesquisa operacional',
    'offer-opt-text': 'Escalonamento, alocação e programação por restrições &mdash; incluindo um agente de escalonamento de contêineres que reduziu o tempo de espera em 30%.',
    'offer-training-title': 'Treinamento e requalificação em IA',
    'offer-training-text': 'Bootcamps e programas de letramento para equipes, de um bootcamp de requalificação de quatro semanas a um programa de formação de 10 cientistas de dados.',
    'offer-cta': 'Iniciar uma conversa',
    'availability-label': 'Disponibilidade',
    'availability-value': 'Aberto a consultoria e projetos selecionados',
    'hobbies-title': 'Fora do trabalho',
    'present': 'Atual',
    'concurrent': 'concomitante',
    'download-cv': 'Baixar currículo completo',
    'awards-title': 'Prêmios e Certificações',
    'languages-spoken-title': 'Idiomas',
    'exp-nohara-title': 'Gerente da Divisão de IA <br> Nohara Group &mdash; Tóquio, Japão',
    'exp-nohara-text': 'Lidera a divisão de IA dentro da Diretoria de Tecnologia: equipe de 3 a 5 pessoas (três com doutorado), mais de 9 projetos simultâneos e coordenação com seis unidades de negócio no Japão, Singapura e Indonésia.',
    'exp-nohara-p1': '<strong>Otimização de alocação e nesting de placas de gesso</strong> &mdash; motor neuro-simbólico (OR-Tools CP-SAT + Swin Transformer V2 + Qwen-2.5-32B) em cluster seguro e isolado. A PoC atingiu 80% de paridade de aproveitamento, evitando &yen;40M em desenvolvimento CAD terceirizado.',
    'exp-nohara-p2': '<strong>Levantamento de quantitativos com IA</strong> &mdash; cálculo automatizado de materiais de interiores a partir de especificações de empreiteiras. Prazo reduzido de cinco dias para menos de dois; até &yen;900M de receita anual projetada e &yen;25M economizados frente à terceirização.',
    'exp-nohara-p3': '<strong>Pipeline híbrido de OCR + LLM para notas de entrega</strong> &mdash; extrai seis campos obrigatórios de faxes manuscritos de baixa qualidade; painel Streamlit na AWS, com análise histórica de 200 mil linhas para redução de perdas.',
    'exp-nohara-p4': '<strong>IA agêntica para lógica de orçamentação legada</strong> &mdash; agentes Copilot Studio analisando macros VBA e fluxos de plugins BIM em ambiente local seguro.',
    'exp-nohara-p5': '<strong>Governança e capacitação</strong> &mdash; autor das políticas de IA da empresa, das Diretrizes de Ferramentas e Engenharia e do AI Skill Map; conduz um bootcamp de requalificação de quatro semanas e o protótipo da Nohara AI Academy.',
    'exp-mti-lead-title': 'Líder de Equipe de IA <br> MTI Ltd. &mdash; Tóquio, Japão',
    'exp-mti-lead-p1': 'Storyboards de mangá com redes de difusão: 45% de ganho de produtividade e 10% de aumento em vendas.',
    'exp-mti-lead-p2': 'Destilação de GPT para dispositivos embarcados; IA agêntica baseada em grafos para maquinário industrial.',
    'exp-mti-lead-p3': 'Transformou em produto um programa de formação de 10 cientistas de dados.',
    'exp-mti-senior-title': 'Cientista de Dados Sênior <br> MTI Ltd. &mdash; Tóquio, Japão',
    'exp-mti-senior-p1': 'Agente de escalonamento de contêineres Japão&ndash;Vietnã&ndash;Singapura: 30% de redução no tempo de espera.',
    'exp-mti-senior-p2': 'Sistema de previsão de chuva integrado a mapas de aviação, com 95% de acurácia.',
    'exp-mti-senior-p3': 'Três anos liderando a formação e o coaching da equipe do Vietnã.',
    'exp-labtec-title': 'Pesquisador Associado <br> Lab-TeC, Universidade Federal Rural da Amazônia &mdash; Brasil',
    'exp-labtec-text': 'Orienta pesquisadores da graduação ao doutorado em inteligência de enxames, sistemas dinâmicos, teoria dos jogos e aprendizado por reforço. Conquistou um financiamento CNPq de US$ 200.000 para pesquisa de detecção de raios na Amazônia, liderando uma equipe de 12 pessoas com a UFPA e a University of Arizona.',
    'stack-languages': 'Linguagens',
    'stack-genai': 'IA Generativa e Agêntica',
    'stack-ml': 'Aprendizado de Máquina',
    'stack-opt': 'Otimização e PO',
    'stack-cloud': 'Nuvem e Plataformas',
    'stack-domain': 'Domínio e Métodos de Trabalho',
    'award-aws': '<strong>AWS Solutions Architect &ndash; Associate</strong>, Amazon Web Services',
    'award-cnpq': '<strong>Auxílio à Pesquisa</strong> (US$ 200.000), Conselho Nacional de Desenvolvimento Científico e Tecnológico (CNPq), Brasil',
    'award-bracis': '<strong>Melhor Artigo de Pesquisa</strong>, Brazilian Conference on Intelligent Systems (BRACIS)',
    'award-toeic': '<strong>TOEIC Written Test</strong> &mdash; 990/990',
    'award-first': '<strong>Primeiro da Turma</strong>, Centro Universitário do Pará',
    'lang-en': 'Inglês &mdash; Nativo',
    'lang-pt': 'Português &mdash; Nativo',
    'lang-ja': 'Japonês &mdash; Fluente (equivalente a N1)',
    'lang-es': 'Espanhol &mdash; Fluente',
    'lang-it': 'Italiano &mdash; Intermediário',
    'proj-rain': 'Previsão de chuva de curto prazo para o Japão com redes neurais, integrada a mapas de aviação com 95% de acurácia.',
    'proj-movement': 'Métodos de subespaços multilineares para reconhecer movimento a partir de dados tensoriais de vídeo.',
    'proj-lightning': 'Detecção de raios na Amazônia financiada pelo CNPq, com a UFPA e a University of Arizona.',
    'proj-hyper': 'Métodos bayesianos e determinísticos para ajuste de hiperparâmetros de redes neurais — o núcleo do meu doutorado.',
    'proj-spheres': 'Um algoritmo genético que se pode ver convergir, escrito para o console de fantasia PICO-8.',
    'proj-nietzche': 'Uma dose diária de niilismo artificial: um LLM ajustado sobre a obra de Nietzsche.',
    'proj-gokuri': 'Reconhecimento de deglutição e tosse para um colar vestível que monitora risco de disfagia, com 95% de acurácia.',
    'proj-helix': 'Um pequeno jogo arcade construído em torno de mecânicas de fita de DNA, lançado no itch.io.',
    'proj-rioss': 'Detecção autônoma de manchas de óleo e embarcações por imagens de satélite no território marinho brasileiro (UNet + ensembles, +10% de acurácia).',
    'proj-belem': 'Um LLM de pequena escala ajustado para atuar como guia turístico de Belém do Pará, cidade-sede da COP30. Monta roteiros e recomendações em mais de 10 idiomas. Em produção.',
    'publications-intro': 'Trabalhos revisados por pares em computacao evolutiva, otimizacao nao linear e aprendizado de maquina. Cada entrada leva ao seu DOI.',
    'pub-journal': 'Periodico',
    'pub-conference': 'Conferencia',
    'pub-profile-semantic': 'Semantic Scholar',
    'form-status': 'Abrindo seu aplicativo de e-mail com a mensagem pronta para enviar.',
    'service-backend-title': 'Desenvolvimento Backend',
    'expertises-title': 'O que eu faco',
    'skills-title': 'Stack tecnico'
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

  renderThemeBtn();
}

const CONTACT_EMAIL = 'marco.mollinetti@gmail.com';

// Theme: follows the OS until the visitor picks one; the pick is saved and applied in <head>
const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

function currentTheme() {
  return document.documentElement.dataset.theme || (darkQuery.matches ? 'dark' : 'light');
}

function renderThemeBtn() {
  const btn = document.querySelector('[data-theme-btn]');
  if (!btn) return;
  const next = currentTheme() === 'dark' ? 'light' : 'dark';
  btn.querySelector('ion-icon').setAttribute('name', next === 'dark' ? 'moon-outline' : 'sunny-outline');
  btn.querySelector('[data-theme-label]').textContent = translations[currentLang]['theme-' + next];
  btn.setAttribute('aria-label', translations[currentLang]['theme-aria-' + next]);
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

  // 3. Initialize filter/select
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

  // 4. Initialize contact form
  const form = document.querySelector("[data-form]");
  const formInputs = document.querySelectorAll("[data-form-input]");
  const formBtn = document.querySelector("[data-form-btn]");

  const formStatus = document.querySelector("[data-form-status]");

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

    // ponytail: mailto compose - GitHub Pages is static, so there is no backend to POST to.
    // Swap for a Formspree/Web3Forms endpoint (form.action + method="POST") if you want
    // delivery straight to your inbox without the visitor having a mail client configured.
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const data = new FormData(form);
      const name = String(data.get("fullname") || "").trim();
      const email = String(data.get("email") || "").trim();
      const message = String(data.get("message") || "").trim();

      const subject = "Website contact from " + name;
      const body = message + "\n\n--\n" + name + "\n" + email;

      window.location.href = "mailto:" + CONTACT_EMAIL +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);

      if (formStatus) formStatus.textContent = translations[currentLang]['form-status'];
    });
  }

  // 5. Initialize navigation
  const navigationLinks = document.querySelectorAll("[data-nav-link]");
  const pages = document.querySelectorAll("article[data-page]");

  for (let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].addEventListener("click", function (e) {
      e.preventDefault();

      const targetPage = this.dataset.page;
      if (!targetPage) return;

      for (let j = 0; j < pages.length; j++) {
        pages[j].classList.toggle("active", pages[j].dataset.page === targetPage);
      }
      for (let j = 0; j < navigationLinks.length; j++) {
        navigationLinks[j].classList.toggle("active", navigationLinks[j] === this);
      }

      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 8. In-page links to another tab (e.g. "Start a conversation" -> Contact)
  document.querySelectorAll('[data-goto]').forEach(function (el) {
    el.addEventListener('click', function () {
      const target = document.querySelector('[data-nav-link][data-page="' + this.dataset.goto + '"]');
      if (target) target.click();
    });
  });

  // 7. Initialize theme toggle
  const themeBtn = document.querySelector('[data-theme-btn]');
  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      const next = currentTheme() === 'dark' ? 'light' : 'dark';
      document.documentElement.dataset.theme = next;
      try { localStorage.setItem('theme', next); } catch (e) {}
      renderThemeBtn();
    });
    darkQuery.addEventListener('change', renderThemeBtn);
  }

  // 6. Initialize language switcher button
  const langBtn = document.querySelector('[data-lang-btn]');
  if (langBtn) {
    langBtn.addEventListener('click', function() {
      const newLang = currentLang === 'en' ? 'pt' : 'en';
      switchLanguage(newLang);
    });
  }
});