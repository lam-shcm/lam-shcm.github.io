const projectData = {
  distortion: {
    eyebrow: "AUDIO R&D / HUMAN FACTORS",
    title: "人对非线性失真的不可接受阈值研究",
    summary:
      "项目研究用户对手机外放非线性失真的可接受边界。技术原型模拟不同失真档位，实验则通过上下加权法逐步逼近个体阈值，并区分普通用户与专业用户。",
    role: [
      "使用 Max/MSP 与 Python 开发失真 Demo",
      "参与实验流程和人因变量控制",
      "协助音源筛选、分组与实验时长设计",
      "参与专业设备校准与测试环境搭建",
    ],
    tools: ["Max/MSP", "Python", "上下加权法", "专业声卡与监听系统"],
    outcome: "形成可执行的听音实验方案及多档位音频原型，为主观音质评价提供实验基础。",
  },
  yinyuejia: {
    eyebrow: "HUAWEI YINYUEJIA / PRODUCT COLLABORATION",
    title: "华为“音悦家” · 音乐产品协作",
    summary:
      "作为华为“音悦家”校企合作项目产品一组成员，我在公开信息范围内参与音乐产品研究、测试与跨专业协作。",
    role: [
      "参与公开信息范围内的音乐产品研究与测试",
      "结合音乐专业背景支持跨专业沟通与问题反馈",
    ],
    tools: ["音乐产品研究", "产品测试", "跨团队协作"],
    outcome: "",
  },
  shengqi: {
    eyebrow: "BIOSIGNALS / GENERATIVE AUDIO / HEALING",
    title: "“声栖” · 生理信号驱动的个性化人工智能音乐疗愈系统",
    summary:
      "“声栖”将脑电与可选心率等生理信号转译为音乐参数，连接人工智能音乐生成、引导词、自然环境声、自动混音与生成质量控制。",
    role: [
      "完成 TGAM 数据采集、ThinkGear 协议解析与滑窗特征链路验证",
      "把注意、放松、唤醒趋势与脑电特征转译为可执行音乐参数",
      "设计“承接—松动—安定”的三阶段疗愈体验结构",
      "融合 AI 主音乐、邀请式 TTS、自然声、自动混音与质量控制",
    ],
    tools: ["Python / ThinkGear", "生理信号特征工程", "生成式音乐与 Prompt", "TTS / 自然声 / 自动混音"],
    outcome: "形成生理信号采集解析、状态转译、音频生成、质量检测与混音等模块及可追溯流程。",
  },
  "shengqi-awards": {
    eyebrow: "GOOD CREATIVITY / NCDA / SOUND & WELLBEING",
    title: "《声栖》",
    summary:
      "《声栖》是一套由生理信号驱动个性化声音生成的人工智能音乐疗愈系统。作品采集并解析脑电与可选心率等数据，将注意、放松和唤醒趋势转译为音乐参数，再连接人工智能主音乐、邀请式引导词、自然环境声、自动混音与生成质量控制，形成能够随个体状态变化的声音体验。同一作品的核心方案分别参加中国好创意数智声音景观赛道与未来设计师·全国高校数字艺术设计大赛，并获得全国总决赛一等奖和上海赛区一等奖。",
    roleLabel: "项目内容",
    role: [
      "完成 TGAM 脑电数据采集、ThinkGear 协议解析与滑窗特征链路验证",
      "将注意、放松、唤醒趋势与脑电特征转译为可执行的音乐参数",
      "设计“承接—松动—安定”的三阶段声音体验结构",
      "融合人工智能主音乐、引导词、自然环境声、自动混音与质量控制",
    ],
    toolsLabel: "获奖记录",
    tools: [
      "第二十届中国好创意暨全国数字艺术设计大赛 · 第 2 季数智声景专项赛",
      "数智声音景观类 · 全国总决赛一等奖",
      "第十四届未来设计师·全国高校数字艺术设计大赛（NCDA）",
      "艺术疗愈-音乐类 · 上海赛区一等奖",
    ],
    outcomeLabel: "作品名称",
    outcome: "《声栖》",
  },
  zhijing: {
    eyebrow: "GOOD CREATIVITY / DIGITAL SOUNDSCAPE",
    title: "《知境》· 数智声音景观竞赛版本",
    summary:
      "《知境》是《声栖》项目家族用于数智声音景观赛道的历史竞赛名称。作品以声音为中枢，把脑电与心率等生理信号转译为音乐参数，并连接生成式音乐、引导词、自然环境声和自动混音。",
    roleLabel: "项目内容",
    role: [
      "以生理信号输入建立个性化声音参数",
      "组织主音乐、中文引导词与自然环境声的三层声音结构",
      "通过自动混音与空间声音设计形成完整体验",
    ],
    toolsLabel: "参赛信息",
    tools: [
      "第二十届中国好创意暨全国数字艺术设计大赛",
      "第 2 季数智声景专项赛 · 数智声音景观类",
      "全国总决赛一等奖",
    ],
    outcomeLabel: "作品名称",
    outcome: "《知境》——EEG 驱动的数智疗愈声音景观系统。",
  },
  lehun: {
    eyebrow: "NCDA / AIGC MUSIC",
    title: "《乐魂九千年》——起承转合之间",
    summary:
      "作品以中国音乐文明九千年的历史演进为叙事主线，从贾湖骨笛出发，以“起、承、转、合”组织传统音色、歌声、环境声与人工智能声音创作。",
    roleLabel: "项目内容",
    role: [
      "以时间结构呈现传统音乐文化的连续变化",
      "组织古琴、古筝、二胡、马头琴、琵琶与京剧唱腔等声音材料",
      "结合人工智能声音生成、多轨编排与后期处理完成作品表达",
    ],
    toolsLabel: "参赛信息",
    tools: [
      "第十四届未来设计师·全国高校数字艺术设计大赛",
      "AIGC-音乐类 · 全国总决赛",
      "全国一等奖",
    ],
    outcomeLabel: "作品名称",
    outcome: "《乐魂九千年》——起承转合之间。",
  },
  yunji: {
    eyebrow: "CHALLENGE CUP / MUSIC & CITY",
    title: "《云际合鸣》——从智能乐队到城市声音名片",
    summary:
      "项目面向文旅场景中的城市声音内容，围绕专业乐队、智能乐器与定制编曲，构想从主题音乐创作、现场演出到持续内容运营的城市音乐资产。",
    roleLabel: "项目内容",
    role: [
      "提炼地方文化与城市声音符号",
      "设计专业乐队、智能乐器与定制编曲的内容组合",
      "探索主题曲、文旅活动与持续内容运营的应用方式",
    ],
    toolsLabel: "参赛信息",
    tools: [
      "第十五届“挑战杯”上海市大学生创业计划竞赛",
      "上海赛区银奖（网站采用本人确认口径）",
    ],
    outcomeLabel: "作品名称",
    outcome: "《云际合鸣》——从智能乐队到城市声音名片。",
  },
  chaoxianyin: {
    eyebrow: "INNOVATION COMPETITION / MUSIC DIGITAL HUMAN",
    title: "《超弦音》· 音乐数字人 3.0+",
    summary:
      "项目聚焦人工智能音乐与数字人技术的融合，以视觉、听觉与交互构成“音乐数字人 3.0+”框架，面向文旅、文教、文博、文娱和文体场景探索内容表达。",
    roleLabel: "项目内容",
    role: [
      "以音乐、情感语音与空间音频增强数字人表达",
      "探索数字人导览、知识音乐化与互动内容传播",
      "围绕五类文化场景组织产品构想",
    ],
    toolsLabel: "参赛信息",
    tools: [
      "中国国际大学生创新大赛（2025）",
      "高教主赛道 · 创意组 · 上海赛区",
      "上海赛区铜奖",
    ],
    outcomeLabel: "作品名称",
    outcome: "《超弦音：“音乐数字人 3.0+”定义者“五文场景”声浪基建商》。",
  },
};

const projectDataEn = {
  distortion: {
    eyebrow: "AUDIO R&D / HUMAN FACTORS",
    title: "Perception Study of Nonlinear Distortion",
    summary:
      "This project examines the boundary at which listeners accept nonlinear distortion from smartphone speakers. A technical prototype simulates multiple distortion levels, while a weighted up-down procedure estimates individual thresholds for general and expert listeners.",
    role: [
      "Developed distortion demos in Max/MSP and Python",
      "Contributed to experimental procedures and human-factors controls",
      "Assisted with source selection, grouping, and session-length design",
      "Contributed to equipment calibration and test-environment setup",
    ],
    tools: ["Max/MSP", "Python", "Weighted up-down method", "Professional audio interface and monitoring system"],
    outcome: "Produced an executable listening-test protocol and multi-level audio prototypes for subjective sound-quality evaluation.",
  },
  yinyuejia: {
    eyebrow: "HUAWEI YINYUEJIA / PRODUCT COLLABORATION",
    title: "HUAWEI Yinyuejia · Music Product Collaboration",
    summary:
      "As a member of Product Team 1 in HUAWEI Yinyuejia's university-industry project, I contributed to music-product research, testing, and interdisciplinary collaboration within the scope of publicly available information.",
    role: [
      "Contributed to music-product research and testing within the scope of publicly available information",
      "Used music-domain expertise to support interdisciplinary communication and issue feedback",
    ],
    tools: ["Music product research", "Product testing", "Cross-team collaboration"],
    outcome: "",
  },
  shengqi: {
    eyebrow: "BIOSIGNALS / GENERATIVE AUDIO / WELLBEING",
    title: "Shengqi · A Personalized AI Music Wellbeing System Driven by Physiological Signals",
    summary:
      "Shengqi maps EEG and optional heart-rate signals to music parameters, connecting AI music generation, spoken guidance, nature sounds, automated mixing, and generative-quality control.",
    role: [
      "Completed TGAM data acquisition, ThinkGear protocol parsing, and validation of a sliding-window feature pipeline",
      "Mapped attention, relaxation, arousal trends, and EEG features to actionable music parameters",
      "Designed a three-stage receive-release-settle wellbeing experience",
      "Integrated AI lead music, invitation-style TTS, nature sounds, automated mixing, and quality control",
    ],
    tools: ["Python / ThinkGear", "Physiological-signal feature engineering", "Generative music and prompting", "TTS / nature sounds / automated mixing"],
    outcome: "Established modules and a traceable workflow for physiological-signal acquisition, state translation, audio generation, quality checks, and mixing.",
  },
  "shengqi-awards": {
    eyebrow: "GOOD CREATIVITY / NCDA / SOUND & WELLBEING",
    title: "Shengqi",
    summary:
      "Shengqi is a personalized AI music wellbeing system driven by physiological signals. It acquires and interprets EEG and optional heart-rate data, maps attention, relaxation, and arousal trends to music parameters, and connects AI-generated lead music, invitation-style spoken guidance, nature sounds, automated mixing, and generative-quality control. The same core work entered both the China Good Creativity digital-intelligent soundscape track and the Future Designer: National College Student Digital Art and Design Competition, receiving First Prize in the national finals and First Prize in the Shanghai Division respectively.",
    roleLabel: "Project content",
    role: [
      "Validated TGAM EEG acquisition, ThinkGear protocol parsing, and a sliding-window feature pipeline",
      "Mapped attention, relaxation, arousal trends, and EEG features to actionable music parameters",
      "Designed a three-stage receive-release-settle sound experience",
      "Integrated AI-generated lead music, spoken guidance, nature sounds, automated mixing, and quality control",
    ],
    toolsLabel: "Competition record",
    tools: [
      "20th China Good Creativity & National Digital Art and Design Competition · Season 2 Digital-Intelligent Soundscape Special Competition",
      "Digital-Intelligent Soundscape Category · First Prize, National Finals",
      "14th Future Designer: National College Student Digital Art and Design Competition (NCDA)",
      "Music for Arts and Wellbeing Category · First Prize, Shanghai Division",
    ],
    outcomeLabel: "Work title",
    outcome: "Shengqi",
  },
  zhijing: {
    eyebrow: "GOOD CREATIVITY / DIGITAL SOUNDSCAPE",
    title: "Zhijing · Digital-Intelligent Soundscape Competition Edition",
    summary:
      "Zhijing is the historical competition name used by the Shengqi project family for the digital-intelligent soundscape track. It maps physiological signals such as EEG and heart rate to music parameters and connects generative music, spoken guidance, nature sounds, and automated mixing.",
    roleLabel: "Project content",
    role: [
      "Uses physiological-signal inputs to create personalized sound parameters",
      "Organizes lead music, Chinese-language spoken guidance, and nature sounds in three layers",
      "Creates a complete experience through automated mixing and spatial-sound design",
    ],
    toolsLabel: "Competition record",
    tools: [
      "20th China Good Creativity & National Digital Art and Design Competition",
      "Season 2 Digital-Intelligent Soundscape Special Competition · Soundscape Category",
      "First Prize, National Finals",
    ],
    outcomeLabel: "Work title",
    outcome: "Zhijing — An EEG-driven digital-intelligent therapeutic soundscape system.",
  },
  lehun: {
    eyebrow: "NCDA / AIGC MUSIC",
    title: "Lehun Jiuqiannian (Nine Millennia of Musical Soul) · A Four-Part Arc",
    summary:
      "Using the nine-millennia evolution of Chinese music as its narrative thread, the work begins with the Jiahu bone flute and uses a four-part arc to organize traditional timbres, voice, environmental sound, and AI-generated sound.",
    roleLabel: "Project content",
    role: [
      "Uses a temporal structure to show the continuous evolution of traditional music culture",
      "Organizes guqin, guzheng, erhu, morin khuur, pipa, and Peking-opera vocals",
      "Combines AI sound generation, multitrack arrangement, and post-production",
    ],
    toolsLabel: "Competition record",
    tools: [
      "14th Future Designer: National College Student Digital Art and Design Competition",
      "AIGC Music Category · National Finals",
      "First Prize, National Finals",
    ],
    outcomeLabel: "Work title",
    outcome: "Lehun Jiuqiannian (Nine Millennia of Musical Soul) · A Four-Part Arc.",
  },
  yunji: {
    eyebrow: "CHALLENGE CUP / MUSIC & CITY",
    title: "Yunji Heming · From Intelligent Bands to a City Sound Identity",
    summary:
      "For city-sound content in cultural-tourism contexts, the project explores a city music asset spanning theme-music creation, live performance, and ongoing content operations through professional bands, intelligent instruments, and bespoke arrangements.",
    roleLabel: "Project content",
    role: [
      "Distills local culture and city-sound motifs",
      "Designs a content mix of professional bands, intelligent instruments, and bespoke arrangements",
      "Explores theme songs, cultural-tourism events, and ongoing content operations",
    ],
    toolsLabel: "Competition record",
    tools: [
      "15th Challenge Cup Shanghai Student Entrepreneurship Plan Competition",
      "Silver Prize, Shanghai Division (wording confirmed by the site owner)",
    ],
    outcomeLabel: "Work title",
    outcome: "Yunji Heming · From Intelligent Bands to a City Sound Identity.",
  },
  chaoxianyin: {
    eyebrow: "INNOVATION COMPETITION / MUSIC DIGITAL HUMAN",
    title: "Chaoxianyin · Music Digital Human 3.0+",
    summary:
      "The project explores the convergence of AI music and digital-human technology through visual, auditory, and interactive elements, with applications across cultural tourism, education, heritage, entertainment, and sports.",
    roleLabel: "Project content",
    role: [
      "Uses music, affective voice, and spatial audio to enrich digital-human expression",
      "Explores digital-human guides, knowledge through music, and interactive content",
      "Organizes a product concept around five cultural contexts",
    ],
    toolsLabel: "Competition record",
    tools: [
      "China International College Students' Innovation Competition (2025)",
      "Higher Education Main Track · Creative Group · Shanghai Division",
      "Bronze Prize, Shanghai Division",
    ],
    outcomeLabel: "Work title",
    outcome: "Chaoxianyin · Music Digital Human 3.0+ for Five Cultural Contexts.",
  },
};

const awardProjectMap = {
  "shengqi-awards": ["shengqi-awards"],
  "ncda-national": ["lehun"],
  "challenge-cup": ["yunji"],
  "innovation-competition": ["chaoxianyin"],
};

const staticEnglish = {
  "跳到主要内容": "Skip to main content",
  "关于": "About",
  "项目": "Work",
  "经历": "Experience",
  "联系": "Contact",
  "让声音成为": "Make sound",
  "可以研究、设计": "a system to study and design",
  "与体验的系统": "and experience",
  "我是罗安民，上海音乐学院音乐科技与艺术方向学生。 我在音乐、音频工程、心理与认知、AI 产品之间工作， 把听觉问题转化为实验、工具与真实体验。": "I'm Luo Anmin, a Music Technology and Arts student at the Shanghai Conservatory of Music. I work across music, audio engineering, psychology and cognition, and AI products—turning listening questions into experiments, tools, and tangible experiences.",
  "查看代表项目": "View selected work",
  "复制邮箱": "Copy email",
  "上海": "Shanghai",
  "音乐科技 / AI 音乐": "Music Technology / AI Music",
  "开放交流与合作": "Open to conversations and collaboration",
  "罗安民": "Luo Anmin",
  "音乐科技": "Music Technology",
  "音频工程": "Audio Engineering",
  "心理与认知": "Psychology & Cognition",
  "人工智能": "Artificial Intelligence",
  "交互体验": "Interaction Design",
  "上海音乐学院": "Shanghai Conservatory of Music",
  "音乐科技与艺术 · 本科": "Music Technology and Arts · Undergraduate",
  "华东师范大学": "East China Normal University",
  "应用心理学 · 辅修": "Applied Psychology · Minor",
  "音乐科创 · 微专业": "Music Innovation and Technology · Micro-major",
  "四项代表性荣誉": "Four selected honours",
  "代表性荣誉": "Selected honours",
  "01 / 全国一等奖": "01 / First Prize, National Finals",
  "02 / 全国一等奖": "02 / First Prize, National Finals",
  "03 / 上海赛区一等奖": "03 / First Prize, Shanghai Division",
  "04 / 上海赛区银奖 / 铜奖": "04 / Silver Prize / Bronze Prize, Shanghai Division",
  "01 | 全国一等奖": "01 | First Prize, National Finals",
  "02 | 全国一等奖": "02 | First Prize, National Finals",
  "03 | 省级一等奖": "03 | First Prize, Shanghai Division",
  "04 | 省级银奖 / 铜奖": "04 | Silver Prize / Bronze Prize, Shanghai Division",
  "01 | 全国一等奖、省级一等奖": "01 | First Prize, National Finals / First Prize, Shanghai Division",
  "03 | 省级银奖": "03 | Silver Prize, Shanghai Division",
  "04 | 省级铜奖": "04 | Bronze Prize, Shanghai Division",
  "中国好创意暨全国数字艺术设计大赛": "China Good Creativity & National Digital Art and Design Competition",
  "数智声音景观类 · 全国总决赛": "Digital-Intelligent Soundscape · National Finals",
  "未来设计师·全国高校数字艺术设计大赛": "Future Designer: National College Student Digital Art and Design Competition",
  "AIGC-音乐类 · 全国总决赛": "AIGC Music · National Finals",
  "艺术疗愈-音乐类 · 上海赛区": "Music for Arts and Wellbeing · Shanghai Division",
  "“挑战杯” / 中国国际大学生创新大赛": "Challenge Cup / China International College Students' Innovation Competition",
  "“挑战杯”上海市大学生创业计划竞赛": "Challenge Cup Shanghai Student Entrepreneurship Plan Competition",
  "中国国际大学生创新大赛": "China International College Students' Innovation Competition",
  "上海赛区": "Shanghai Division",
  "相关项目 ↗": "View related project ↗",
  "作品详情 ↗": "View work details ↗",
  "项目详情 ↗": "View project details ↗",
  "跨学科，是我的工作方法。": "Interdisciplinarity is how I work.",
  "从声音频谱与听觉感知出发，建立实验、整理证据；": "I begin with sound spectra and auditory perception, build experiments, and organize evidence.",
  "再把结论转化为产品、工具与可以被验证的真实体验。": "I then turn findings into products, tools, and experiences that can be tested.",
  "研究声音": "Study Sound",
  "听觉主观评价、人因实验、音乐心理与认知、疗愈音乐机制。": "Subjective listening evaluation, human-factors experiments, music psychology and cognition, and mechanisms of therapeutic music.",
  "构建声音": "Build Sound",
  "从 DSP 原型、交互音频到录音混音，让抽象概念可以被听见。": "From DSP prototypes and interactive audio to recording and mixing, I make abstract ideas audible.",
  "连接智能": "Connect Intelligence",
  "AI 音乐数据规范、自动标注链路、产品定义与生成式音乐实践。": "AI music data standards, automated annotation pipelines, product definition, and generative music practice.",
  "把想法推进到可验证。": "Move ideas toward validation.",
  "这里选取三个方向不同的项目，展示我如何处理声音、研究、 产品与交互之间的关系。": "These three projects show how I work across sound, research, product, and interaction.",
  "音频算法 / 人因研究": "Audio Algorithms / Human-Factors Research",
  "企业合作": "Industry Collaboration",
  "人对非线性失真的": "Perception Study of",
  "感知实验": "Nonlinear Distortion",
  "使用 Max/MSP 与 Python 构建手机外放失真 Demo， 参与上下加权法实验流程、人因变量控制与声学校准。": "Built smartphone-speaker distortion demos in Max/MSP and Python; contributed to weighted up-down test procedures, human-factors controls, and acoustic calibration.",
  "查看项目详情": "View project details",
  "音乐产品 / 音色与 UX": "Music Product / Timbre & UX",
  "校企合作": "University-Industry Collaboration",
  "华为“音悦家” · 音乐产品协作": "HUAWEI Yinyuejia · Music Product Collaboration",
  "作为校企合作项目产品一组成员，参与音乐产品研究、 测试与跨专业协作。": "As a member of Product Team 1 in a university-industry project, I contributed to music-product research, testing, and interdisciplinary collaboration.",
  "华为官方项目页 ↗": "HUAWEI official project page ↗",
  "音乐心理 / 生成式音频": "Music Psychology / Generative Audio",
  "工具原型": "Tool Prototype",
  "“声栖” · 生理信号驱动的个性化人工智能音乐疗愈系统": "Shengqi · Personalized AI Music Wellbeing System",
  "将生理信号转译为音乐参数，连接人工智能音乐生成、 引导词、自然环境声、自动混音与质量控制。": "Maps physiological signals to music parameters, connecting AI music generation, spoken guidance, nature sounds, automated mixing, and quality control.",
  "疗愈音乐的声学机制与功能分类": "Acoustic Mechanisms and Functional Taxonomy of Therapeutic Music",
  "独立综述 / 证据框架": "Independent Review / Evidence Framework",
  "某中置 V8 超跑自然声浪前期定义": "Early Definition of a Mid-Engine V8 Supercar Sound Signature",
  "声音目标 / 跨团队研究": "Sound Target / Cross-Team Research",
  "AutoLab「金耳朵」声音主观评价": "AutoLab ‘Golden Ear’ Subjective Listening Evaluation",
  "智能座舱 / 音箱 / TWS": "In-Car Audio / Loudspeakers / TWS",
  "MCI 音乐偏好与精准干预": "Music Preferences and Targeted Intervention for MCI",
  "医学合作 / 音乐库": "Medical Collaboration / Music Library",
  "音乐诱发情绪的 EEG 实验": "EEG Experiment on Music-Evoked Emotion",
  "实验设计 / 刺激材料": "Experimental Design / Stimulus Materials",
  "上海市录音师协会会员": "Member, Shanghai Recording Engineers Association",
  "专业会员 / 音频行业交流": "Professional Membership / Audio Industry Exchange",
  "证书与资质": "Certificates & Credentials",
  "数智声景专项赛": "Digital Soundscape Special Competition",
  "全国一等奖": "National First Prize",
  "未来设计师 · AIGC 音乐类": "Future Designer · AIGC Music",
  "上海赛区一等奖": "Shanghai First Prize",
  "未来设计师 · 音乐疗愈方向": "Future Designer · Music Wellbeing",
  "上海市录音师协会": "Shanghai Association of Recording Engineers",
  "会员资质": "Professional Membership",
  "马兰花创业培训 · SYB": "Malan Flower Entrepreneurship Training · SYB",
  "结业证书": "Completion Certificate",
  "马兰花创业培训（SYB）": "Malan Flower Entrepreneurship Training (SYB)",
  "创业认知 / 商业计划基础": "Entrepreneurship / Business Planning Fundamentals",
  "学习，也在真实场景里验证。": "Learning is tested in real contexts.",
  "自由量级（上海）智能科技有限公司": "initi:AI (Shanghai) Intelligent Technology Co., Ltd.",
  "评测实习生 / 产品实习生": "Evaluation Intern / Product Intern",
  "AI 音乐模型评测 · 标注规范与数据验收 · 产品研究": "AI music-model evaluation · Annotation standards and data acceptance · Product research",
  "乐王（上海）文化发展股份有限公司": "Music King (Shanghai) Cultural Development Co., Ltd.",
  "听觉主观评价实验设计": "Subjective Listening Evaluation Design",
  "听觉主观评价": "Subjective Listening Evaluation",
  "Platane HD32 耳机实验设计 · Counterbalance · 声卡驱动调研": "Platane HD32 headphone experiment design · Counterbalancing · Audio-interface driver research",
  "上海音虫科技有限公司": "Shanghai SoundBug Technology Co., Ltd.",
  "测试实习生": "QA Intern",
  "SoundBug 3.0 正常与异常场景测试 · Bug 报告 · UX 建议": "SoundBug 3.0 normal- and edge-case testing · Bug reports · UX recommendations",
  "持续更新": "Continuously updated",
  "生成式音乐 · 数据规范 · 质量评测 · 产品研究": "Generative music · Data standards · Quality evaluation · Product research",
  "如果你也在探索": "If you're exploring",
  "音乐、技术与心理的边界，": "the edges of music, technology, and psychology,",
  "我们可以聊聊。": "let's talk.",
  "关闭": "Close",
  "查看大图": "View full image",
  "证书完整大图": "Full certificate image",
  "相关项目": "Related projects",
  "我的工作": "My contribution",
  "方法与工具": "Methods & tools",
  "项目内容": "Project content",
  "参赛信息": "Competition record",
  "作品名称": "Work title",
  "邮箱已复制": "Email copied",
};

const translatedAttributes = [
  [".brand", "aria-label", "返回首页", "Back to home"],
  ["[data-nav]", "aria-label", "主要导航", "Main navigation"],
  [".hero__facts", "aria-label", "基本信息", "Profile at a glance"],
  [".hero__visual", "aria-label", "罗安民肖像", "Portrait of Luo Anmin"],
  [".portrait-card img", "alt", "罗安民在录音棚中的插画风肖像", "Illustrated portrait of Luo Anmin in a music studio"],
  [".floating-note svg", "aria-label", "装饰音频波形", "Decorative audio waveform"],
  [".education-early", "aria-label", "教育经历", "Education"],
  [".awards-early", "aria-label", "获奖经历", "Awards and recognition"],
  [".credentials-gallery", "aria-label", "证书与资质", "Certificates and credentials"],
  ["[data-credential='digital-soundscape'] img", "alt", "中国好创意数智声景专项赛全国一等奖证书", "National First Prize certificate for the China Creative Digital Soundscape Special Competition"],
  ["[data-credential='ncda-national-aigc'] img", "alt", "未来设计师AIGC音乐类全国一等奖证书", "National First Prize certificate in AIGC Music at the Future Designer competition"],
  ["[data-credential='ncda-provincial-aigc'] img", "alt", "未来设计师AIGC音乐类上海赛区一等奖证书", "Shanghai First Prize certificate in AIGC Music at the Future Designer competition"],
  ["[data-credential='ncda-provincial-healing'] img", "alt", "未来设计师音乐疗愈方向上海赛区一等奖证书", "Shanghai First Prize certificate in Music Wellbeing at the Future Designer competition"],
  ["[data-credential='recording-association'] img", "alt", "上海市录音师协会会员证书", "Membership certificate from the Shanghai Association of Recording Engineers"],
  ["[data-credential='syb-training'] img", "alt", "马兰花创业培训SYB结业证书", "Completion certificate for Malan Flower SYB entrepreneurship training"],
  [".practice-card--lime .tag-list", "aria-label", "研究能力", "Research capabilities"],
  [".practice-card--coral .tag-list", "aria-label", "音频技能", "Audio skills"],
  [".practice-card--blue .tag-list", "aria-label", "人工智能技能", "AI skills"],
  [".project-card__media--technical img", "alt", "非线性失真感知实验的 Max/MSP 参数界面", "Max/MSP interface for a nonlinear-distortion perception study"],
  [".project-card__media--yinyuejia img", "alt", "华为“音悦家”工作室模式界面", "HUAWEI Yinyuejia studio-mode interface"],
  [".project-card__media--shengqi img", "alt", "“声栖”项目宣讲 PPT 封面", "Cover slide for the Shengqi project presentation"],
  [".timeline", "aria-label", "实习与项目经历", "Internship and project experience"],
  [".timeline-logo-frame--initiai img", "alt", "initi:AI 自由量级标志", "initi:AI logo"],
  [".timeline-item:nth-child(2) img", "alt", "Music King 乐王标志", "Music King logo"],
  [".timeline-item:nth-child(3) img", "alt", "SoundBug 音虫标志", "SoundBug logo"],
  ["[data-dialog-project-menu]", "aria-label", "相关项目", "Related projects"],
  ["[data-dialog-close]", "aria-label", "关闭", "Close"],
  ["[data-credential-close]", "aria-label", "关闭大图", "Close full image"],
];

const originalTextByNode = new WeakMap();
let currentLanguage = "zh-CN";

function normalizeText(value) {
  return value.trim().replace(/\s+/g, " ");
}

function translateStaticText(language) {
  const walker = document.createTreeWalker(document.body, 4);
  let node = walker.nextNode();
  while (node) {
    if (!originalTextByNode.has(node)) originalTextByNode.set(node, node.nodeValue);
    const original = originalTextByNode.get(node);
    const normalized = normalizeText(original);
    if (normalized && staticEnglish[normalized]) {
      const leading = original.match(/^\s*/)?.[0] || "";
      const trailing = original.match(/\s*$/)?.[0] || "";
      node.nodeValue = language === "en" ? `${leading}${staticEnglish[normalized]}${trailing}` : original;
    }
    node = walker.nextNode();
  }
}

function applyTranslatedAttributes(language) {
  translatedAttributes.forEach(([selector, attribute, zh, en]) => {
    document.querySelector(selector)?.setAttribute(attribute, language === "en" ? en : zh);
  });
}

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-nav]");
const languageToggle = document.querySelector("[data-language-toggle]");
const languageLabel = document.querySelector("[data-language-label]");
const navLinks = [...document.querySelectorAll("[data-nav-link]")];
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

function setMenu(open) {
  menuToggle?.setAttribute("aria-expanded", String(open));
  const menuLabel = currentLanguage === "en"
    ? (open ? "Close navigation" : "Open navigation")
    : (open ? "关闭导航" : "打开导航");
  menuToggle?.setAttribute("aria-label", menuLabel);
  nav?.classList.toggle("is-open", open);
  document.body.classList.toggle("menu-open", open);
}

function readLanguagePreference() {
  try {
    return window.localStorage.getItem("portfolio-language") === "en" ? "en" : "zh-CN";
  } catch {
    return "zh-CN";
  }
}

function saveLanguagePreference(language) {
  try {
    window.localStorage.setItem("portfolio-language", language);
  } catch {
    // file:// 预览可能禁用本地存储；本次切换仍然有效。
  }
}

function applyLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;
  document.body.classList.toggle("lang-en", language === "en");
  document.title = language === "en"
    ? "Luo Anmin | Music Technology, Audio & AI Music Practice"
    : "罗安民｜音乐科技、音频与 AI 音乐实践";
  document.querySelector('meta[name="description"]')?.setAttribute(
    "content",
    language === "en"
      ? "Luo Anmin's portfolio: music technology and arts, audio engineering, psychology and cognition, and AI music products."
      : "罗安民的个人主页：音乐科技与艺术、音频工程、心理与认知、AI 音乐产品。",
  );
  translateStaticText(language);
  applyTranslatedAttributes(language);
  if (languageLabel) languageLabel.textContent = language === "en" ? "中文" : "EN";
  languageToggle?.setAttribute(
    "aria-label",
    language === "en" ? "切换至中文" : "Switch to English",
  );
  setMenu(false);
  if (activeProjectKey && dialog?.open) {
    renderProject(activeProjectKey, activeMenuProjectKeys, false);
  }
}

languageToggle?.addEventListener("click", () => {
  const language = currentLanguage === "en" ? "zh-CN" : "en";
  applyLanguage(language);
  saveLanguagePreference(language);
});

menuToggle?.addEventListener("click", () => {
  setMenu(menuToggle.getAttribute("aria-expanded") !== "true");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

window.addEventListener(
  "scroll",
  () => {
    header?.classList.toggle("is-scrolled", window.scrollY > 24);

    const marker = window.scrollY + window.innerHeight * 0.34;
    let currentSection = "";

    sections.forEach((section) => {
      if (marker >= section.offsetTop) {
        currentSection = section.id;
      }
    });

    navLinks.forEach((link) => {
      link.classList.toggle("is-active", link.getAttribute("href") === `#${currentSection}`);
    });
  },
  { passive: true },
);

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
);

document.querySelectorAll(".reveal").forEach((element, index) => {
  element.style.transitionDelay = `${Math.min(index % 4, 3) * 65}ms`;
  revealObserver.observe(element);
});

const dialog = document.querySelector("[data-project-dialog]");
const dialogFields = {
  eyebrow: dialog?.querySelector("[data-dialog-eyebrow]"),
  title: dialog?.querySelector("[data-dialog-title]"),
  summary: dialog?.querySelector("[data-dialog-summary]"),
  projectMenu: dialog?.querySelector("[data-dialog-project-menu]"),
  projectMenuList: dialog?.querySelector("[data-dialog-project-menu-list]"),
  roleLabel: dialog?.querySelector("[data-dialog-role-label]"),
  role: dialog?.querySelector("[data-dialog-role]"),
  toolsLabel: dialog?.querySelector("[data-dialog-tools-label]"),
  tools: dialog?.querySelector("[data-dialog-tools]"),
  outcomeLabel: dialog?.querySelector("[data-dialog-outcome-label]"),
  outcome: dialog?.querySelector("[data-dialog-outcome]"),
  outcomeContainer: dialog?.querySelector(".project-dialog__outcome"),
};

let lastDialogTrigger = null;
let activeProjectKey = null;
let activeMenuProjectKeys = [];

function fillList(element, items) {
  if (!element) return;
  element.replaceChildren(
    ...items.map((item) => {
      const listItem = document.createElement("li");
      listItem.textContent = item;
      return listItem;
    }),
  );
}

function renderProject(projectKey, menuProjectKeys = [], focusMenu = false) {
  const data = currentLanguage === "en" ? projectDataEn : projectData;
  const project = data[projectKey];
  if (!project || !dialog) return;

  dialogFields.eyebrow.textContent = project.eyebrow;
  dialogFields.title.textContent = project.title;
  dialogFields.summary.textContent = project.summary;
  if (dialogFields.roleLabel) dialogFields.roleLabel.textContent = project.roleLabel || (currentLanguage === "en" ? "My contribution" : "我的工作");
  if (dialogFields.toolsLabel) dialogFields.toolsLabel.textContent = project.toolsLabel || (currentLanguage === "en" ? "Methods & tools" : "方法与工具");
  const hasOutcome = Boolean(project.outcome);
  if (dialogFields.outcomeContainer) {
    dialogFields.outcomeContainer.hidden = !hasOutcome;
    dialogFields.outcomeContainer.style.display = hasOutcome ? "" : "none";
  }
  if (dialogFields.outcomeLabel) dialogFields.outcomeLabel.textContent = project.outcomeLabel || "OUTPUT";
  if (dialogFields.outcome) dialogFields.outcome.textContent = project.outcome || "";
  fillList(dialogFields.role, project.role);
  fillList(dialogFields.tools, project.tools);

  const showMenu = menuProjectKeys.length > 1;
  dialog.classList.toggle("project-dialog--single", !showMenu);
  if (dialogFields.projectMenu) {
    dialogFields.projectMenu.hidden = !showMenu;
    dialogFields.projectMenu.style.display = showMenu ? "" : "none";
    dialogFields.projectMenu.setAttribute("aria-hidden", String(!showMenu));
  }
  dialogFields.projectMenuList?.replaceChildren();

  if (showMenu && dialogFields.projectMenuList) {
    menuProjectKeys.forEach((menuProjectKey) => {
      const menuProject = data[menuProjectKey];
      if (!menuProject) return;

      const listItem = document.createElement("li");
      const menuButton = document.createElement("button");
      menuButton.className = "text-link";
      menuButton.type = "button";
      menuButton.textContent = menuProject.title;
      if (menuProjectKey === projectKey) menuButton.setAttribute("aria-current", "page");
      menuButton.addEventListener("click", () => {
        renderProject(menuProjectKey, menuProjectKeys, true);
      });
      listItem.append(menuButton);
      dialogFields.projectMenuList.append(listItem);
    });
  }

  if (focusMenu && dialogFields.projectMenuList) {
    window.requestAnimationFrame(() => {
      dialogFields.projectMenuList.querySelector('[aria-current="page"]')?.focus();
    });
  }
}

function openProjectDialog(projectKey, menuProjectKeys, trigger) {
  const data = currentLanguage === "en" ? projectDataEn : projectData;
  if (!data[projectKey] || !dialog) return;
  lastDialogTrigger = trigger;
  activeProjectKey = projectKey;
  activeMenuProjectKeys = menuProjectKeys;
  renderProject(projectKey, menuProjectKeys, false);
  dialog.showModal();

  window.requestAnimationFrame(() => {
    dialog.querySelector("[data-dialog-close]")?.focus();
  });
}

document.querySelectorAll("[data-project-open]").forEach((button) => {
  button.addEventListener("click", () => {
    openProjectDialog(button.dataset.projectOpen, [], button);
  });
});

document.querySelectorAll("[data-award-open]").forEach((button) => {
  button.addEventListener("click", () => {
    const menuProjectKeys = awardProjectMap[button.dataset.awardOpen] || [];
    if (!menuProjectKeys.length) return;
    openProjectDialog(menuProjectKeys[0], menuProjectKeys, button);
  });
});

dialog?.querySelector("[data-dialog-close]")?.addEventListener("click", () => dialog.close());
dialog?.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});
dialog?.addEventListener("close", () => {
  lastDialogTrigger?.focus();
  lastDialogTrigger = null;
  activeProjectKey = null;
  activeMenuProjectKeys = [];
});

const credentialDialog = document.querySelector("[data-credential-dialog]");
const credentialDialogImage = credentialDialog?.querySelector("[data-credential-dialog-image]");
const credentialDialogCaption = credentialDialog?.querySelector("[data-credential-dialog-caption]");
let lastCredentialTrigger = null;

document.querySelectorAll("[data-credential-open]").forEach((button) => {
  button.addEventListener("click", () => {
    const figure = button.closest("figure");
    const sourceImage = figure?.querySelector("img");
    const caption = figure?.querySelector("figcaption span")?.textContent?.trim();
    if (!credentialDialog || !credentialDialogImage || !sourceImage) return;
    lastCredentialTrigger = button;
    credentialDialogImage.src = sourceImage.currentSrc || sourceImage.src;
    credentialDialogImage.alt = sourceImage.alt;
    if (credentialDialogCaption) credentialDialogCaption.textContent = caption || sourceImage.alt;
    credentialDialog.showModal();
    window.requestAnimationFrame(() => credentialDialog.querySelector("[data-credential-close]")?.focus());
  });
});

credentialDialog?.querySelector("[data-credential-close]")?.addEventListener("click", () => credentialDialog.close());
credentialDialog?.addEventListener("click", (event) => {
  if (event.target === credentialDialog) credentialDialog.close();
});
credentialDialog?.addEventListener("close", () => {
  credentialDialogImage?.removeAttribute("src");
  lastCredentialTrigger?.focus();
  lastCredentialTrigger = null;
});

const copyButtons = [...document.querySelectorAll("[data-copy-email]")];
const toast = document.querySelector("[data-toast]");
let toastTimer;

async function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // 部分浏览器会拒绝剪贴板权限，继续使用兼容方案。
    }
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.append(textarea);
  textarea.focus();
  textarea.select();
  const copied = document.execCommand("copy");
  textarea.remove();
  return copied;
}

copyButtons.forEach((copyButton) => {
  copyButton.addEventListener("click", async () => {
    const copied = await copyText("13816023718@163.com");
    toast.textContent = copied
      ? (currentLanguage === "en" ? "Email copied: 13816023718@163.com" : "邮箱已复制：13816023718@163.com")
      : (currentLanguage === "en" ? "Email: 13816023718@163.com" : "邮箱：13816023718@163.com");
    toast?.classList.add("is-visible");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => {
      toast?.classList.remove("is-visible");
      toast.textContent = currentLanguage === "en" ? "Email copied" : "邮箱已复制";
    }, 2600);
  });
});

document.querySelector("[data-year]").textContent = new Date().getFullYear();
applyLanguage(readLanguagePreference());

function startSignalCanvas() {
  const canvas = document.querySelector("#signal-canvas");
  const context = canvas?.getContext("2d");
  if (!canvas || !context || prefersReducedMotion) return;

  let width = 0;
  let height = 0;
  let pixelRatio = 1;
  let pointerX = 0.72;
  let pointerY = 0.34;
  let targetX = pointerX;
  let targetY = pointerY;

  function resize() {
    pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.round(width * pixelRatio);
    canvas.height = Math.round(height * pixelRatio);
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  }

  function handlePointer(event) {
    targetX = event.clientX / width;
    targetY = event.clientY / height;
  }

  function draw(time) {
    pointerX += (targetX - pointerX) * 0.035;
    pointerY += (targetY - pointerY) * 0.035;
    context.clearRect(0, 0, width, height);

    const colors = [
      "rgba(200, 255, 69, 0.22)",
      "rgba(117, 167, 255, 0.12)",
      "rgba(255, 107, 74, 0.10)",
    ];

    colors.forEach((color, index) => {
      context.beginPath();
      context.strokeStyle = color;
      context.lineWidth = index === 0 ? 1.1 : 0.8;

      const baseY = height * (0.2 + index * 0.24 + pointerY * 0.16);
      const amplitude = 28 + index * 18 + pointerY * 30;
      const frequency = 0.008 + index * 0.002;
      const phase = time * (0.00035 + index * 0.00012) + pointerX * 4;

      for (let x = -20; x <= width + 20; x += 9) {
        const envelope = Math.sin((x / width) * Math.PI);
        const y =
          baseY +
          Math.sin(x * frequency + phase) * amplitude * envelope +
          Math.cos(x * 0.003 - phase) * 13;

        if (x === -20) context.moveTo(x, y);
        else context.lineTo(x, y);
      }

      context.stroke();
    });

    window.requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener("resize", resize, { passive: true });
  window.addEventListener("pointermove", handlePointer, { passive: true });
  window.requestAnimationFrame(draw);
}

startSignalCanvas();
