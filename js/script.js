const heroExamples = {
  ar: {
    label: "العربية",
    example: "EXAMPLE / 01",
    direction: "rtl",
    code: `
      <div class="text-zinc-700" dir="ltr">// hello.world</div>
      <div class="mt-2">
        <span class="text-[#b58cff]">طباعة</span><span class="text-white">(</span><span class="text-[#8cffb0]">"أهلاً بالعالم"</span><span class="text-white">)</span>
      </div>
    `,
    output: "أهلاً بالعالم"
  },

  en: {
    label: "English",
    example: "EXAMPLE / 02",
    direction: "ltr",
    code: `
      <div class="text-zinc-700">// hello.world</div>
      <div class="mt-2">
        <span class="text-[#b58cff]">print</span><span class="text-white">(</span><span class="text-[#8cffb0]">"Hello World"</span><span class="text-white">)</span>
      </div>
    `,
    output: "Hello World"
  },

  tr: {
    label: "Türkçe",
    example: "EXAMPLE / 03",
    direction: "ltr",
    code: `
      <div class="text-zinc-700">// hello.world</div>
      <div class="mt-2">
        <span class="text-[#b58cff]">yaz</span><span class="text-white">(</span><span class="text-[#8cffb0]">"Selam Dünya"</span><span class="text-white">)</span>
      </div>
    `,
    output: "Selam Dünya"
  },

  ja: {
    label: "日本語",
    example: "EXAMPLE / 04",
    direction: "ltr",
    code: `
      <div class="text-zinc-700">// hello.world</div>
      <div class="mt-2">
        <span class="text-[#b58cff]">表示</span><span class="text-white">(</span><span class="text-[#8cffb0]">"こんにちは世界"</span><span class="text-white">)</span>
      </div>
    `,
    output: "こんにちは世界"
  }
};

const heroCode = document.getElementById("hero-code");
const heroLanguage = document.getElementById("hero-language");
const heroOutput = document.getElementById("hero-output");
const heroExample = document.getElementById("hero-example");

let heroKeys = Object.keys(heroExamples);
let heroIndex = 0;

function renderHero(key) {
  const example = heroExamples[key];

  heroCode.classList.add("out");

  setTimeout(() => {
    heroCode.setAttribute("dir", example.direction);
    heroCode.innerHTML = example.code;
    heroLanguage.textContent = example.label;
    heroOutput.textContent = example.output;
    heroExample.textContent = example.example;
    heroCode.classList.remove("out");
  }, 260);
}

renderHero(heroKeys[0]);

setInterval(() => {
  heroIndex = (heroIndex + 1) % heroKeys.length;
  renderHero(heroKeys[heroIndex]);
}, 3600);


const lessonExamples = {
  ar: {
    label: "Arabic",
    title: "Learn through your own language.",
    description:
      "The learner can encounter variables, input, conditions, functions, recursion, and return values without first translating the whole lesson into English.",
    code: `
<div class="text-zinc-700"># حاسبة المضروب</div>
<div class="mt-2"><span class="text-[#FF5C00]">متغير</span> <span class="text-white">الرقم</span> <span class="text-zinc-500">=</span> <span class="text-[#b58cff]">عدد_صحيح</span><span class="text-white">(</span><span class="text-[#b58cff]">استقبل</span><span class="text-white">(</span><span class="text-[#8cffb0]">"أدخل رقماً"</span><span class="text-white">))</span></div>

<div class="mt-1"><span class="text-[#FF5C00]">دالة</span> <span class="text-[#fff]">مضروب</span><span class="text-white">(</span><span class="text-white">رقم</span><span class="text-white">)</span></div>
<div class="pl-6"><span class="text-[#FF5C00]">اذا</span> <span class="text-white">رقم</span> <span class="text-white">==</span> <span class="text-purple-300">١</span> <span class="text-[#b58cff]">او</span> <span class="text-white">رقم</span> <span class="text-white">==</span> <span class="text-purple-300">٠</span> <span class="text-[#b58cff]">نفذ</span> <span class="text-[#b58cff]">ارجاع</span> <span class="text-purple-300">١</span></div>
<div class="pl-6"><span class="text-[#FF5C00]">ارجاع</span> <span class="text-white">رقم</span> <span class="text-zinc-500">*</span> <span class="text-[#b58cff]">مضروب</span><span class="text-white">(</span><span class="text-white">رقم</span> <span class="text-zinc-500">-</span> <span class="text-purple-300">١</span><span class="text-white">)</span></div>
<div><span class="text-[#FF5C00]">نهاية</span></div>

<div class="mt-1"><span class="text-[#b58cff]">طباعة</span><span class="text-white">(</span><span class="text-[#fff]">مضروب</span><span class="text-white">(</span><span class="text-purple-300">٥</span><span class="text-white">))</span></div>
    `
  },

  en: {
    label: "English",
    title: "Learn the concepts first.",
    description:
      "English can be one expression of the language, while the underlying lessons stay focused on programming ideas rather than memorizing unfamiliar notation.",
    code: `
<div class="text-zinc-700">// factorial.world</div>
<div class="mt-2"><span class="text-[#FF5C00]">var</span> <span class="text-white">number</span> <span class="text-zinc-500">=</span> <span class="text-[#b58cff]">integer</span><span class="text-white">(</span><span class="text-[#b58cff]">input</span><span class="text-white">(</span><span class="text-[#8cffb0]">"Enter a number"</span><span class="text-white">))</span></div>
<div class="mt-1"><span class="text-[#FF5C00]">func</span> <span class="text-[#b58cff]">factorial</span><span class="text-white">(</span><span class="text-white">number</span><span class="text-white">)</span></div>
<div class="pl-6"><span class="text-[#FF5C00]">if</span> <span class="text-white">number</span> <span class="text-white">==</span> <span class="text-purple-300">1</span> <span class="text-[#b58cff]">or</span> <span class="text-white">number</span> <span class="text-white">==</span> <span class="text-purple-300">0</span> <span class="text-[#b58cff]">return</span> <span class="text-purple-300">1</span></div>
<div class="pl-6"><span class="text-[#FF5C00]">return</span> <span class="text-white">number</span> <span class="text-zinc-500">*</span> <span class="text-[#b58cff]">factorial</span><span class="text-white">(</span><span class="text-white">number</span> <span class="text-zinc-500">-</span> <span class="text-purple-300">1</span><span class="text-white">)</span></div>
<div><span class="text-[#FF5C00]">end</span></div>
<div class="mt-1"><span class="text-[#b58cff]">print</span><span class="text-white">(</span><span class="text-[#fff]">factorial</span><span class="text-white">(</span><span class="text-purple-300">5</span><span class="text-white">))</span></div>
    `
  },

  tr: {
    label: "Turkish",
    title: "Let the first steps feel familiar.",
    description:
      "The same computational ideas can be presented in a language the learner already understands, helping the lesson start from curiosity rather than translation.",
    code: `
<div class="text-zinc-700">// factorial.world</div>
<div class="mt-2"><span class="text-[#FF5C00]">değişken</span> <span class="text-white">sayı</span> <span class="text-zinc-500">=</span> <span class="text-[#b58cff]">tam_sayı</span><span class="text-white">(</span><span class="text-[#b58cff]">al</span><span class="text-white">(</span><span class="text-[#8cffb0]">"Bir sayı gir"</span><span class="text-white">))</span></div>
<div class="mt-1"><span class="text-[#FF5C00]">fonksiyon</span> <span class="text-[#b58cff]">faktoriyel</span><span class="text-white">(</span><span class="text-white">sayı</span><span class="text-white">)</span></div>
<div class="pl-6"><span class="text-[#FF5C00]">eğer</span> <span class="text-white">sayı</span> <span class="text-white">==</span> <span class="text-purple-300">1</span> <span class="text-[#b58cff]">veya</span> <span class="text-white">sayı</span> <span class="text-white">==</span> <span class="text-purple-300">0</span> <span class="text-[#b58cff]">döndür</span> <span class="text-purple-300">1</span></div>
<div class="pl-6"><span class="text-[#FF5C00]">döndür</span> <span class="text-white">sayı</span> <span class="text-zinc-500">*</span> <span class="text-[#b58cff]">faktoriyel</span><span class="text-white">(</span><span class="text-white">sayı</span> <span class="text-zinc-500">-</span> <span class="text-purple-300">1</span><span class="text-white">)</span></div>
<div><span class="text-[#FF5C00]">son</span></div>
<div class="mt-1"><span class="text-[#b58cff]">yaz</span><span class="text-white">(</span><span class="text-[#fff]">faktoriyel</span><span class="text-white">(</span><span class="text-purple-300">5</span><span class="text-white">))</span></div>
    `
  },

  ja: {
    label: "Japanese",
    title: "Keep the learning focused on thinking.",
    description:
      "Japanese-speaking learners can explore the same programming concepts while the language itself feels closer to their existing linguistic world.",
    code: `
<div class="text-zinc-700">// factorial.world</div>
<div class="mt-2"><span class="text-[#FF5C00]">変数</span> <span class="text-white">数</span> <span class="text-zinc-500">=</span> <span class="text-[#b58cff]">整数</span><span class="text-white">(</span><span class="text-[#b58cff]">入力</span><span class="text-white">(</span><span class="text-[#8cffb0]">"数字を入力"</span><span class="text-white">))</span></div>
<div class="mt-1"><span class="text-[#FF5C00]">関数</span> <span class="text-[#b58cff]">階乗</span><span class="text-white">(</span><span class="text-white">数</span><span class="text-white">)</span></div>
<div class="pl-6"><span class="text-[#FF5C00]">もし</span> <span class="text-white">数</span> <span class="text-white">==</span> <span class="text-purple-300">1</span> <span class="text-[#b58cff]">または</span> <span class="text-white">数</span> <span class="text-white">==</span> <span class="text-purple-300">0</span> <span class="text-[#b58cff]">戻す</span> <span class="text-purple-300">1</span></div>
<div class="pl-6"><span class="text-[#FF5C00]">戻す</span> <span class="text-white">数</span> <span class="text-zinc-500">*</span> <span class="text-[#b58cff]">階乗</span><span class="text-white">(</span><span class="text-white">数</span> <span class="text-zinc-500">-</span> <span class="text-purple-300">1</span><span class="text-white">)</span></div>
<div><span class="text-[#FF5C00]">終了</span></div>
<div class="mt-1"><span class="text-[#b58cff]">表示</span><span class="text-white">(</span><span class="text-[#fff]">階乗</span><span class="text-white">(</span><span class="text-purple-300">5</span><span class="text-white">))</span></div>
    `
  }
};

const lessonCode = document.getElementById("lesson-code");
const lessonLabel = document.getElementById("lesson-label");
const languageTitle = document.getElementById("language-title");
const languageDescription = document.getElementById("language-description");
const tabs = document.querySelectorAll(".language-tab");

function renderLesson(key) {
  const lesson = lessonExamples[key];

  lessonCode.style.opacity = "0";
  lessonCode.style.transform = "translateY(7px)";

  setTimeout(() => {
    lessonCode.innerHTML = lesson.code.trim();
    lessonLabel.textContent = lesson.label;
    languageTitle.textContent = lesson.title;
    languageDescription.textContent = lesson.description;

    lessonCode.style.opacity = "1";
    lessonCode.style.transform = "translateY(0)";
  }, 180);
}

renderLesson("ar");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(item => {
      item.classList.remove("active");
      item.classList.add("border-white/10", "text-zinc-500");
    });

    tab.classList.add("active");
    tab.classList.remove("border-white/10", "text-zinc-500");

    renderLesson(tab.dataset.lang);
  });
});


const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.12
  }
);

document.querySelectorAll(".reveal").forEach(element => {
  revealObserver.observe(element);
});


document.getElementById("year").textContent =
  new Date().getFullYear();
