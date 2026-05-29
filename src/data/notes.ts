export interface Note {
  slug: string;
  title: string;
  date: string; // YYYY-MM-DD
  tags: string[];
  summary: string;
  // 段落の配列。先頭が "code:" の要素はコードブロックとして表示する。
  body: string[];
}

export const notes: Note[] = [
  {
    slug: "first-day",
    title: "Claude Code を触り始めた初日のメモ",
    date: "2026-05-29",
    tags: ["はじめに", "セットアップ"],
    summary:
      "インストールから初回起動まで。最初に /init で CLAUDE.md を作っておくと文脈共有が楽になる。",
    body: [
      "公式のネイティブインストーラで導入して、プロジェクトのルートで起動した。Node.js の準備が要らないのが楽だった。",
      "code:curl -fsSL https://claude.ai/install.sh | bash\ncd my-project\nclaude",
      "起動後すぐに /init を実行すると、リポジトリを解析して CLAUDE.md を生成してくれる。これがあると以降の会話で文脈をいちいち説明しなくて済む。",
      "気づき: いきなり大きな変更を頼むより、まず「計画を立てて」と頼んで段取りを確認してから着手させるほうが事故が少ない。",
    ],
  },
  {
    slug: "plan-mode",
    title: "計画モードの使いどころ",
    date: "2026-05-29",
    tags: ["ワークフロー", "Tips"],
    summary:
      "Shift + Tab で計画モードへ。大きめのタスクはまず計画を承認してから実行させると安全。",
    body: [
      "Shift + Tab を押すとモードが循環し、計画モードに入れる。計画モード中はファイルを編集せず、実装方針だけを提示してくれる。",
      "複数ファイルにまたがる変更や、消えると困るデータを扱うときは、この計画を一度レビューしてから実行に移すと安心できる。",
      "逆に、タイポ修正のような小さい変更ではモードを切り替えず普通に頼んだほうが速い。",
    ],
  },
  {
    slug: "template",
    title: "（雛形）新しいノートはここをコピーして書く",
    date: "2026-05-29",
    tags: ["雛形"],
    summary: "学んだことを書き足すためのテンプレート。src/data/notes.ts を編集する。",
    body: [
      "ここに学んだことの本文を書く。段落は配列の要素ごとに分かれる。",
      "code:// コードを載せたい段落は先頭に code: を付ける\nclaude --help",
      "tags や date を埋めると一覧に反映される。",
    ],
  },
];

export function getNote(slug: string): Note | undefined {
  return notes.find((n) => n.slug === slug);
}
