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
    eyebrow: "HUAWEI YINYUEJIA / PRODUCT RESEARCH",
    title: "华为“音悦家” · 乐器与声音产品研究",
    summary:
      "作为华为“音悦家”校企合作项目产品一组成员，我围绕中西乐器、演奏技法与创作工作流开展产品研究，为音色采样、拟真交互和创作模板提供输入。",
    role: [
      "调研民族乐器、古代乐器与常见西方乐器的音色和使用差异",
      "梳理常用与非常用演奏技法，并按使用频率形成采样建议",
      "研究乐器结构、材质与外观，协助拟真乐器 UX 建模",
      "参与混音滤镜和多风格工程模板设计",
    ],
    tools: ["文献与视频资料整理", "演奏家访谈", "乐器与技法分析", "DAW 与混音流程"],
    outcome: "形成乐器、技法与产品设计输入，支持音色采样、UX 建模以及创作模板制作。",
  },
  shengqi: {
    eyebrow: "EEG / GENERATIVE AUDIO / HEALING",
    title: "“声栖” · EEG 驱动的接受式人工智能音乐疗愈系统",
    summary:
      "“声栖”面向高压力人群的短时情绪调节场景，将真实 EEG 状态解析、音乐规则转译、生成式音频、TTS 引导词、自然环境声和自动混音连接成可重复运行的工具链。",
    role: [
      "完成 TGAM 数据采集、ThinkGear 协议解析与滑窗特征链路验证",
      "把注意、放松、唤醒趋势与脑电特征转译为可执行音乐参数",
      "设计“承接—松动—安定”的三阶段疗愈体验结构",
      "融合 AI 主音乐、邀请式 TTS、自然声与自动混音",
    ],
    tools: ["Python / ThinkGear", "EEG 特征工程", "生成式音乐与 Prompt", "TTS / 自然声 / 自动混音"],
    outcome: "完成从真实 EEG 输入到标准音频导出的端到端原型，并形成可追溯、可复用的疗愈声景生成流程。",
  },
};

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-nav]");
const navLinks = [...document.querySelectorAll("[data-nav-link]")];
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

function setMenu(open) {
  menuToggle?.setAttribute("aria-expanded", String(open));
  menuToggle?.setAttribute("aria-label", open ? "关闭导航" : "打开导航");
  nav?.classList.toggle("is-open", open);
  document.body.classList.toggle("menu-open", open);
}

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
  role: dialog?.querySelector("[data-dialog-role]"),
  tools: dialog?.querySelector("[data-dialog-tools]"),
  outcome: dialog?.querySelector("[data-dialog-outcome]"),
};

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

document.querySelectorAll("[data-project-open]").forEach((button) => {
  button.addEventListener("click", () => {
    const project = projectData[button.dataset.projectOpen];
    if (!project || !dialog) return;

    dialogFields.eyebrow.textContent = project.eyebrow;
    dialogFields.title.textContent = project.title;
    dialogFields.summary.textContent = project.summary;
    dialogFields.outcome.textContent = project.outcome;
    fillList(dialogFields.role, project.role);
    fillList(dialogFields.tools, project.tools);
    dialog.showModal();
  });
});

dialog?.querySelector("[data-dialog-close]")?.addEventListener("click", () => dialog.close());
dialog?.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
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
      ? "邮箱已复制：13816023718@163.com"
      : "邮箱：13816023718@163.com";
    toast?.classList.add("is-visible");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => {
      toast?.classList.remove("is-visible");
      toast.textContent = "邮箱已复制";
    }, 2600);
  });
});

document.querySelector("[data-year]").textContent = new Date().getFullYear();

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
