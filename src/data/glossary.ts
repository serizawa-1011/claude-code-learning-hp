export interface GlossaryEntry {
  term: string;
  reading?: string;
  description: string;
}

// 非エンジニアでもわかるように、できるだけ平易な言葉で説明する。
export const glossary: GlossaryEntry[] = [
  {
    term: "ターミナル",
    description:
      "文字でコンピュータに命令を打ち込むための画面。マウスで操作する代わりに、キーボードで命令を入力する。「黒い画面」「コマンドプロンプト」と呼ばれることもある。",
  },
  {
    term: "CLI",
    reading: "シーエルアイ",
    description:
      "Command Line Interface（コマンドライン・インターフェース）の略。マウスのクリックではなく、文字の命令でソフトを操作する方式のこと。Claude Code はこのCLIツール。",
  },
  {
    term: "コマンド",
    description:
      "コンピュータに「これをして」と伝えるための命令の文字列。ターミナルに打ち込んで実行する。",
  },
  {
    term: "Node.js",
    reading: "ノードジェイエス",
    description:
      "JavaScript というプログラミング言語を、パソコン上で動かすための土台となるソフト。Claude Code を動かすのに必要。",
  },
  {
    term: "npm",
    reading: "エヌピーエム",
    description:
      "Node.js 向けのプログラム部品（パッケージ）を、インターネットからダウンロードして導入する仕組み。アプリストアのようなもの。",
  },
  {
    term: "インストール",
    description: "ソフトを使えるように、パソコンに導入すること。",
  },
  {
    term: "グローバルインストール",
    description:
      "そのパソコンのどこからでも使えるように、ソフトを全体に導入すること。特定のフォルダの中だけでなく、いつでも呼び出せる状態になる。",
  },
  {
    term: "リポジトリ",
    description:
      "プロジェクトのファイル一式と、その変更の履歴をまとめて管理する保管場所。略して「リポ」とも言う。",
  },
  {
    term: "ディレクトリ",
    description: "いわゆる「フォルダ」のこと。ファイルをまとめて入れておく場所。",
  },
  {
    term: "ルートディレクトリ",
    description:
      "プロジェクトの一番上の階層にあるフォルダ。その中に各種ファイルやサブフォルダが入っている。",
  },
  {
    term: "diff",
    reading: "差分（ディフ）",
    description:
      "変更の前と後で、どこがどう変わったかを並べて示したもの。追加された行・削除された行が色分けで表示される。",
  },
  {
    term: "認証",
    description:
      "「本人かどうか」を確認して、利用を許可する手続き。ここではブラウザでログインして Claude Code を使えるようにすること。",
  },
  {
    term: "CLAUDE.md",
    reading: "クロードエムディー",
    description:
      "プロジェクトの概要やルールを書いておくメモのファイル。Claude Code がこれを読んで、毎回説明しなくても文脈を理解してくれる。",
  },
  {
    term: "スラッシュコマンド",
    description:
      "対話の途中で「/」（スラッシュ）から始めて入力する、特別な命令。例: /help、/clear。",
  },
  {
    term: "キーバインド",
    description:
      "特定のキー操作に割り当てられた機能のこと。いわゆるショートカットキー。",
  },
  {
    term: "プロンプト",
    description:
      "AIへの指示やお願いを書いた文章のこと。「このバグを直して」のような依頼文。",
  },
  {
    term: "自然言語",
    description: "日本語や英語など、人間が普段の会話で使っている言葉のこと。",
  },
  {
    term: "セッション",
    description:
      "ソフトを起動してから終了するまでの、一続きのやり取りのこと。",
  },
  {
    term: "トークン",
    description:
      "AIが文章を処理するときの細かい単位。おおまかには文字や単語のかたまり。利用量や料金の目安になる。",
  },
  {
    term: "エージェント",
    description:
      "ゴールに向かって、自分で考えながら手順を進めていくAIのこと。Claude Code は「コーディングエージェント」。",
  },
  {
    term: "計画モード",
    description:
      "いきなりファイルを書き換えず、先に「どう進めるか」の計画だけを出すモード。大きな変更の前に方針を確認できる。",
  },
  {
    term: "ユニットテスト",
    description:
      "プログラムの小さな部品が、正しく動くかを自動で確かめる検査のこと。",
  },
  {
    term: "リファクタリング",
    description:
      "プログラムの動きは変えずに、中身を整理して読みやすく・直しやすくすること。",
  },
  {
    term: "エッジケース",
    description:
      "めったに起きないが、起こり得る特殊な状況のこと。テストで見落としがちな部分。",
  },
  {
    term: "API",
    reading: "エーピーアイ",
    description:
      "ソフト同士が機能をやり取りするための「窓口」や「取り決め」のこと。外部サービスと連携するときに使う。",
  },
  {
    term: "コミット",
    description:
      "変更内容に区切りをつけて、履歴として記録すること。あとから「いつ何を変えたか」を振り返れる。",
  },
  {
    term: "ステージ",
    description:
      "コミット（記録）に含める変更を選んで、準備しておくこと。「ステージング」とも言う。",
  },
];

const map = new Map(glossary.map((e) => [e.term, e]));

export function getTerm(term: string): GlossaryEntry | undefined {
  return map.get(term);
}
