export const stats = [
  { label: 'ML / Data Projects', value: 8, decimals: 0 },
  { label: 'Research Roles', value: 3, decimals: 0 },
  { label: 'M.Sc. GPA / 20', value: 17.55, decimals: 2 },
  { label: 'Models Benchmarked', value: 10, decimals: 0 },
];

export const education = [
  {
    degree: 'M.Sc. Information Technology Engineering',
    school: 'Amirkabir University of Technology (Tehran Polytechnic) · 2021–2024',
    note: 'Thesis: Improving Detection of Selfish-Mining Attacks on Ethereum Classic Using ML',
  },
  {
    degree: 'B.Sc. Computer Engineering',
    school: 'Shiraz University of Technology · 2016–2020',
    note: '',
  },
];

export const experience = [
  {
    date: '2025 — Present',
    title: 'Research Assistant — Scientometrics & Research Evaluation (NLP)',
    org: 'Islamic World Science Citation Center (ISC), Shiraz, Iran',
    body: 'Leading an NLP hate-speech detection project on Persian social media text using BERT-based transformers and LSTM baselines, with full experiment tracking for publication-ready results.',
  },
  {
    date: '2024 — 2025',
    title: 'Research Assistant — Medical AI',
    org: 'Shiraz University of Medical Sciences, Shiraz, Iran',
    body: 'Developed ML models to predict pre-liver transplant mortality; built leakage-safe preprocessing pipelines and handled class imbalance to improve clinical prediction reliability.',
  },
  {
    date: '2021 — 2024',
    title: 'Research Assistant — Cybersecurity (Blockchain ML)',
    org: 'Amirkabir University of Technology, Tehran, Iran',
    body: 'Built ML-based blockchain attack detection systems, including dataset preparation and feature engineering from transaction and network signals.',
  },
  {
    date: '2018 — 2021',
    title: 'WiFi Network Support & Web Programmer',
    org: 'Tehran Telecommunication · Codidac Team, Shiraz University of Technology',
    body: 'Remote WiFi infrastructure support; earlier, developed and maintained web applications as part of the university programming team.',
  },
];

export const projects = [
  {
    tag: 'Healthcare AI',
    cat: 'Healthcare AI',
    featured: true,
    title: 'Pre-Liver Transplant Mortality Prediction',
    body: '10-fold cross-validated comparison of Random Forest, XGBoost, Gradient Boosting, MLP, AdaBoost, Logistic Regression and Linear SVM, plus Voting-Top3 and Voting-Top4 ensembles.',
    stack: ['Python', 'scikit-learn', 'XGBoost', '10-fold CV'],
    repo: 'https://github.com/amir-khjp/pre-liver-transplant-mortality-prediction',
  },
  {
    tag: 'Persian NLP',
    cat: 'Persian NLP',
    featured: true,
    title: 'Persian Hate Speech Detection',
    body: 'End-to-end NLP pipeline comparing BERT-based transformers, an LSTM baseline, and lightweight fine-tuned GPT-2-style models across architectures.',
    stack: ['PyTorch', 'HuggingFace', 'BERT', 'LSTM'],
    repo: 'https://github.com/amir-khjp/persian-hate-speech-detection',
  },
  {
    tag: 'Blockchain Security',
    cat: 'Blockchain',
    title: 'Ethereum Classic Fraud Detection',
    body: 'Fraud detection study on Ethereum Classic transaction data using SVM, Random Forest, and KNN, with hyperparameter optimization.',
    stack: ['SVM', 'Random Forest', 'KNN'],
    repo: 'https://github.com/amir-khjp/ethereum-classic-fraud-detection-ml',
  },
  {
    tag: 'Systems Engineering',
    cat: 'Systems',
    title: 'Real-Time Embedded Data Pipeline',
    body: 'FastAPI backend interfacing with an embedded system, streaming live sensor/location data over WebSocket while persisting every record to PostgreSQL.',
    stack: ['FastAPI', 'PostgreSQL', 'WebSocket'],
    repo: 'https://github.com/amir-khjp',
  },
  {
    tag: 'Blockchain Data',
    cat: 'Blockchain',
    title: 'Ethereum Classic On-Chain Dataset Construction',
    body: 'Collected and engineered Ethereum Classic blockchain data from Google BigQuery via SQL into structured feature tables for downstream ML.',
    stack: ['BigQuery', 'SQL'],
    repo: 'https://github.com/amir-khjp/ethereum-classic-onchain-dataset-bigquery',
  },
  {
    tag: 'Data Engineering',
    cat: 'Healthcare AI',
    title: 'Clinical Data Preprocessing & Feature Selection',
    body: 'End-to-end preprocessing of a pre-liver transplant dataset: missing-value handling, target-leakage removal, and feature selection.',
    stack: ['Python', 'pandas'],
    repo: 'https://github.com/amir-khjp/liver-transplant-preprocessing-feature-selection',
  },
  {
    tag: 'Imbalanced Learning',
    cat: 'Healthcare AI',
    title: 'Class Imbalance Handling for Mortality Classification',
    body: 'Applied SMOTE to address severe class imbalance, improving minority-class learning and stabilizing cross-validated evaluation.',
    stack: ['SMOTE', 'imbalanced-learn'],
    repo: 'https://github.com/amir-khjp/mortality-class-imbalance-smote',
  },
  {
    tag: 'GIS Tooling',
    cat: 'Systems',
    title: 'Offline Map Tile Downloader',
    body: 'Python tool to download and package map tiles for offline GIS use, exporting to raster tile formats and MBTiles.',
    stack: ['Python', 'MBTiles', 'GIS'],
    repo: 'https://github.com/amir-khjp/tile-downloader',
  },
];

export const skillGroups = [
  {
    title: 'ML & Data Science',
    strong: true,
    items: ['Python', 'SQL', 'scikit-learn', 'pandas / NumPy', 'Ensemble Methods', 'SMOTE'],
  },
  {
    title: 'Deep Learning & NLP',
    items: ['PyTorch', 'HuggingFace', 'BERT Fine-tuning', 'LSTM', 'GPT-2'],
  },
  {
    title: 'Backend & Systems',
    strong: true,
    items: ['FastAPI', 'PostgreSQL', 'WebSocket', 'REST API'],
  },
  {
    title: 'Blockchain & Web3',
    items: ['BigQuery', 'Solidity', 'Web3.js', 'Hardhat'],
  },
  {
    title: 'Actively Developing',
    outline: true,
    items: ['Financial & Risk Analytics', 'Credit Risk Modeling'],
  },
];

export const radarData = [
  { skill: 'ML & Modeling', value: 95 },
  { skill: 'DL / NLP', value: 72 },
  { skill: 'Backend Systems', value: 88 },
  { skill: 'Blockchain & Web3', value: 65 },
  { skill: 'Data Engineering', value: 90 },
  { skill: 'GIS / Web', value: 55 },
];

export const contactLinks = [
  { label: 'Email', value: 'a.khajepour.official@gmail.com', href: 'mailto:a.khajepour.official@gmail.com' },
  { label: 'GitHub', value: 'github.com/amir-khjp', href: 'https://github.com/amir-khjp', external: true },
  { label: 'LinkedIn', value: 'Add your LinkedIn URL', href: '#' },
];
