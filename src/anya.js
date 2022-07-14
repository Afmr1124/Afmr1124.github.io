const pic = {
    uniform: "https://i.pinimg.com/564x/b1/f4/92/b1f49223c01dd170c72138777db0fff7.jpg",
    icecream: "https://i.pinimg.com/736x/75/8d/42/758d426cc72d4ac832972ca978c86484.jpg",
    uniform_large: "https://i.pinimg.com/564x/8c/14/24/8c14243d2e00bfcce8791fc94fbfebc4.jpg",
    casual_large: "https://i.pinimg.com/736x/d3/58/5d/d3585d47152be01145068fbb38679b2f.jpg",
    avatars: [],
};

pic.avatars.push(
    "https://i.pinimg.com/564x/fd/41/21/fd41217d167bc7e482c2873afe90d7af.jpg",
    "https://i.pinimg.com/564x/6e/3c/15/6e3c153f56ae317a7dd8d411a645d781.jpg",
    "https://i.pinimg.com/564x/8e/e3/6d/8ee36d0c5218b69f6d69fc877c6ed427.jpg",
    "https://i.pinimg.com/564x/94/36/5d/94365da8469f67e5fadae4b0c092b2f7.jpg",
    "https://i.pinimg.com/564x/b0/9a/80/b09a80ace593f085cc3df46fae422ad9.jpg",
    "https://i.pinimg.com/736x/e2/ee/b0/e2eeb023999ac0eb3bc67443f920d329.jpg",
    "https://i.pinimg.com/564x/4f/70/7d/4f707d0e7ce7aaa0a5ce38bba6583771.jpg",
    "https://i.pinimg.com/564x/eb/03/af/eb03afd2c1c9ada7737c2ed7ff96bf64.jpg",
    "https://i.pinimg.com/564x/12/5b/de/125bdee9ca2e92bb1c8dd73a9c731bda.jpg",
    "https://i.pinimg.com/564x/8c/14/24/8c14243d2e00bfcce8791fc94fbfebc4.jpg",
    "https://i.pinimg.com/564x/0d/4d/d5/0d4dd5bb993caa3ab4379e554c4c685e.jpg",
    "https://i.pinimg.com/564x/eb/97/29/eb972908559a8e12fcde062e1ae32da4.jpg",
    "https://i.pinimg.com/564x/b3/af/d1/b3afd119d692ec2e834004d0b40fcf30.jpg",
    "https://i.pinimg.com/564x/85/55/c4/8555c4d3d9662702d2bc9d57e80af175.jpg",
    "https://i.pinimg.com/564x/e2/43/9c/e2439cf5f36e7db9d5ca651f5572f178.jpg",
    "https://i.pinimg.com/564x/ea/05/cd/ea05cd84458f032b8da05ede7d258529.jpg",
    "https://i.pinimg.com/564x/fb/93/04/fb93044d2e1be4ac3cfbb71e3f636622.jpg",
    "https://i.pinimg.com/564x/d3/58/5d/d3585d47152be01145068fbb38679b2f.jpg",
    "https://i.pinimg.com/564x/06/8d/28/068d28bc3a69754209df3468476be33f.jpg",

);

const titles = ["來自彰化", "曾就讀：陝西國小、精誠國中", "目前就讀：秀水高工室設科113級"];

const about = [
    "我叫林芸嫺",
    "我不太喜歡把學歷拿出來跟大家說...",
    "很多人都用學歷來定義一個人，給他既定印象...",
    "",
    "I DON'T LIKE IT !!!",
    "",
    "於是我用充實自己，來賦予自我價值",
    "我的紀錄本：",
    "  - 曾主持英文舞台",
    "  - 曾是精誠高中國中部畢聯會代表",
    "  - 現在班級的班長",
    "  - 擔任多次學校工讀生",
    "  - ...未完...",
    "",
    '我會什麼？',
    '  - 取得建築手繪製圖丙級證照',
    '  - ',
    '我喜歡？',
    '  - 彈吉他',
    '  - 攝影',
    '  - 扯鈴',
    '  - 寫札記',
    '  - 製圖',
    '  - 設計',
    '  - 籃球、桌球、棒球、排球...'

].join("\n");

const projects = [
    {
        name: "2022/07/04~2022/07/08 台師大資工營",
        description: "會寫這個網站，就是因為去了資工營。他們教了從最簡單的基本指令，進一步改寫網站。還學了用Python寫五子棋的單機...下面連結是在營隊課程上做的",
        image: "https://i.pinimg.com/564x/cf/c7/04/cfc7045a6c2eec3ce87096f10fec2664.jpg",
        skills: ["Vue", "Tailwind", "Node.js", "GitHub"],
        url: "https://afmr1124.github.io/",
    },
    {
        name: "高一作文比賽",
        description: "寫文章一向都是我拿手的，但上了高中後，也很少在寫作文了…其實原本的我很討厭寫字，直到遇到了一些困境，我才開始慢慢培養寫作的能力。而這次的作文題目是：「如何與異性相處」(？)",
        image: "",
        skills: ["Writing", "Feelings", "Expression"],
        url: "",
    },
    {
        name: "人生「會考」兩次",
        description: "第一次是正常升高中，第二次是休學後，毅然決然選擇轉學，差點考不了...",
        image: "",
        skills: ["身體健康，什麼都好了"],
        url: "",
        /*可以架一個網站，給自己放自己的暗嘿，想放的東西。可以用監聽系統，監視每個瀏覽者的資料*/
    },
];

export { pic, titles, about, projects };
