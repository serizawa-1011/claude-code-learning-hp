import type { Block } from "@/components/ContentBlocks";

export type Level = "入門" | "実践" | "上級";

export interface Chapter {
  slug: string;
  num: number;
  level: Level;
  title: string;
  summary: string;
  blocks: Block[];
}

export const levels: { level: Level; label: string; description: string }[] = [
  {
    level: "入門",
    label: "入門編",
    description: "Claude Code とは何かを理解し、導入して最初の対話ができるようになる。",
  },
  {
    level: "実践",
    label: "実践編",
    description: "日々の開発で使いこなすためのワークフローと中核機能を身につける。",
  },
  {
    level: "上級",
    label: "上級編",
    description: "カスタマイズ・拡張・自動化で Claude Code を自分の環境に最適化する。",
  },
];

export const chapters: Chapter[] = [
  {
    slug: "what-is-claude-code",
    num: 1,
    level: "入門",
    title: "Claude Code とは",
    summary: "ターミナルで動くコーディングエージェントの正体と、できることを理解する。",
    blocks: [
      {
        type: "p",
        text: "Claude Code は、[[ターミナル]]の中で動く Anthropic 公式の[[エージェント|コーディングエージェント]]です。「このバグを直して」「テストを追加して」といった依頼を[[自然言語]]で伝えるだけで、コードを読み、書き換え、[[コマンド]]を実行し、結果を確認するところまで自分で進めます。",
      },
      {
        type: "p",
        text: "ふつうのチャットAIとの一番の違いは、**あなたの開発環境で実際に手を動かせる**ことです。ファイルを開いて編集し、テストを走らせ、Git を操作する——人間のエンジニアがやる作業を、許可の範囲内で代行します。",
      },
      { type: "h", text: "何ができるのか" },
      {
        type: "list",
        items: [
          "**コードを書く・直す**: 機能追加、バグ修正、[[リファクタリング]]、テスト作成",
          "**コードを理解する**: 大きな[[リポジトリ]]を読み解き、処理の流れを説明する",
          "**コマンドを実行する**: ビルド・テスト・Git などを実行し、結果を見て次の手を打つ",
          "**調べて計画する**: 仕様や原因を調査し、着手前に手順を提案する（[[計画モード]]）",
        ],
      },
      { type: "h", text: "どこで動くのか" },
      {
        type: "p",
        text: "基本は[[ターミナル]]の[[CLI]]ツールですが、VS Code・JetBrains などのIDE拡張、デスクトップアプリ、ブラウザ（claude.ai/code）からも使えます。この教科書では中心となる CLI を軸に解説します。",
      },
      {
        type: "callout",
        tone: "note",
        text: "Claude Code は「魔法の自動化ツール」ではなく、優秀な相棒です。指示の出し方と確認の仕方を覚えるほど、できることが広がります。この教科書はその「使いこなし」を入門から上級まで通して身につけるためのものです。",
      },
    ],
  },
  {
    slug: "install-and-login",
    num: 2,
    level: "入門",
    title: "インストールとログイン",
    summary: "公式インストーラで導入し、アカウント認証を済ませて起動できる状態にする。",
    blocks: [
      {
        type: "p",
        text: "まずは Claude Code を自分のパソコンに[[インストール]]します。公式の[[ネイティブインストーラ]]を使うのが最も簡単で、[[Node.js]]の事前準備も不要です。",
      },
      { type: "h", text: "macOS / Linux / WSL" },
      { type: "code", code: "curl -fsSL https://claude.ai/install.sh | bash", terminal: true },
      { type: "h", text: "Windows (PowerShell)" },
      { type: "code", code: "irm https://claude.ai/install.ps1 | iex" },
      {
        type: "p",
        text: "Homebrew を使っている場合は `brew install --cask claude-code` でも導入できます。",
      },
      {
        type: "callout",
        tone: "note",
        text: "以前は `npm install -g @anthropic-ai/claude-code` での導入が案内されていましたが、現在は上記のネイティブインストーラが推奨です。npm 版を入れていた場合も、新しいインストーラに乗り換えられます。",
      },
      { type: "h", text: "起動とログイン" },
      {
        type: "p",
        text: "導入できたら、作業したいプロジェクトの[[ディレクトリ|フォルダ]]に移動して `claude` と打つだけで起動します。",
      },
      { type: "code", code: "cd ~/projects/my-app\nclaude", terminal: true },
      {
        type: "p",
        text: "初回はブラウザが開いて[[認証]]（ログイン）を求められます。Claude の有料プラン（Pro / Max）または Anthropic の[[API]]課金アカウントでログインすれば、すぐに使い始められます。",
      },
      {
        type: "callout",
        tone: "tip",
        text: "うまく動かないときは `claude doctor` で環境診断、`claude update` で最新版へ更新できます。ログイン状態は `claude auth status` で確認できます。",
      },
    ],
  },
  {
    slug: "first-conversation",
    num: 3,
    level: "入門",
    title: "はじめての対話",
    summary: "依頼の出し方、Claude の動きの見方、対話を止める・やり直す基本操作を覚える。",
    blocks: [
      {
        type: "p",
        text: "起動したら、やってほしいことを[[自然言語]]で打ち込むだけです。最初は気軽に、コードベースについて質問してみましょう。",
      },
      { type: "code", code: "このプロジェクトは何をするもの？主要なファイルを教えて" },
      {
        type: "p",
        text: "Claude はファイルを読み、必要なら[[コマンド]]を実行しながら答えます。ファイルを書き換える前には、原則として何をするか[[diff|差分]]を見せ、許可を求めます（権限の仕組みは第4章）。",
      },
      { type: "h", text: "依頼してみる" },
      {
        type: "list",
        items: [
          "**質問**: 「認証処理はどこ？」「この関数は何をしている？」",
          "**修正**: 「ログイン後に白画面になるバグを直して」",
          "**追加**: 「`utils/date.ts` にテストを追加して」",
        ],
      },
      { type: "h", text: "知っておきたい基本操作" },
      {
        type: "table",
        head: ["操作", "意味"],
        rows: [
          ["`Esc`", "実行中の動作を止める（割り込み）"],
          ["`Esc` を2回", "会話を過去にさかのぼって編集・やり直し"],
          ["`Shift + Tab`", "権限モード（[[計画モード]]など）を切り替え"],
          ["`/clear`", "会話履歴をリセットして[[コンテキスト]]を空にする"],
          ["`Ctrl + C`", "入力のキャンセル／終了"],
        ],
      },
      {
        type: "callout",
        tone: "tip",
        text: "思った方向と違う動きをしたら、遠慮なく `Esc` で止めて言い直しましょう。途中で方針を変えても問題ありません。これが人間と協働する感覚です。",
      },
    ],
  },
  {
    slug: "permission-modes",
    num: 4,
    level: "入門",
    title: "権限モードを理解する",
    summary: "Claude が何をどこまで自動で実行できるか。安全と効率のバランスを操る。",
    blocks: [
      {
        type: "p",
        text: "Claude Code は、ファイルの書き換えや[[コマンド]]の実行といった「影響のある操作」の前に、原則あなたの許可を求めます。この許可の厳しさを切り替えるのが[[権限モード]]です。",
      },
      {
        type: "table",
        head: ["モード", "ふるまい", "向いている場面"],
        rows: [
          ["`default`", "編集やコマンドのたびに確認を求める", "ふだんの作業（安全重視）"],
          ["`acceptEdits`", "ファイル編集は自動承認、コマンド等は確認", "編集が多い反復作業"],
          ["`plan`（[[計画モード]]）", "変更せず調査と計画提案のみ", "大きな変更の着手前"],
          ["`bypassPermissions`", "すべて確認なしで実行", "隔離環境や自己責任の自動化"],
        ],
      },
      {
        type: "p",
        text: "対話中は `Shift + Tab` でこれらを順に切り替えられます。起動時に決めておきたい場合は `--permission-mode` フラグを使います。",
      },
      { type: "code", code: "claude --permission-mode plan", terminal: true },
      {
        type: "callout",
        tone: "warn",
        text: "`bypassPermissions` はすべての確認を飛ばすため強力ですが危険です。信頼できるコードと隔離された環境以外では使わないでください。どの操作をいつ許可するかは、第15章の設定（permissions）でルール化できます。",
      },
      {
        type: "callout",
        tone: "tip",
        text: "迷ったら[[計画モード]]から始めるのが安全です。まず計画を出させて内容を確認し、納得してから実行に移すと、的外れな大改造を防げます。",
      },
    ],
  },
  {
    slug: "effective-prompts",
    num: 5,
    level: "実践",
    title: "効果的なプロンプトの書き方",
    summary: "曖昧な依頼を、Claude が一発で正しく動ける具体的な指示に変える。",
    blocks: [
      {
        type: "p",
        text: "Claude Code の成果は[[プロンプト]]（指示）の質で大きく変わります。コツは、人間の同僚に頼むときと同じくらいの具体性を持たせることです。",
      },
      { type: "h", text: "良い依頼の4要素" },
      {
        type: "list",
        ordered: true,
        items: [
          "**ゴール**: 最終的に何が達成できればよいか",
          "**文脈**: 対象ファイル・関連情報・制約（「挙動は変えないで」など）",
          "**手順の希望**: 「まず調べてから」「テストを書いてから直して」",
          "**完了条件**: 「テストが通ること」「ビルドが成功すること」",
        ],
      },
      { type: "h", text: "悪い例と良い例" },
      {
        type: "table",
        head: ["曖昧な依頼", "具体的な依頼"],
        rows: [
          ["バグを直して", "ログイン後に白画面になるバグを直して。再現手順は〜。原因を調べてから修正して"],
          ["テスト書いて", "`utils/date.ts` の `formatDate` に [[ユニットテスト]]を Vitest で追加。[[エッジケース]]も含めて"],
          ["整理して", "`UserService` を責務ごとに分割して[[リファクタリング]]。公開APIと挙動は変えず、テストが通ることを確認して"],
        ],
      },
      {
        type: "callout",
        tone: "tip",
        text: "エラーメッセージやログは、要約せずそのまま貼り付けるのが一番です。Claude が原因を特定する手がかりになります。ファイルは `@パス` で指し示すと確実です（第6章）。",
      },
      {
        type: "callout",
        tone: "note",
        text: "一度に詰め込みすぎないことも大切です。大きなタスクは「まず計画 → 1ステップずつ実行」と分けると、軌道修正しやすく品質も上がります。",
      },
    ],
  },
  {
    slug: "explore-plan-implement",
    num: 6,
    level: "実践",
    title: "探索→計画→実装のワークフロー",
    summary: "Claude Code の王道。調べさせ、計画させ、確認してから実装させる。",
    blocks: [
      {
        type: "p",
        text: "経験的に最も成功しやすいのが「**探索 → 計画 → 実装**」の3段構えです。いきなり書かせるのではなく、理解と方針合わせを先に済ませます。",
      },
      { type: "h", text: "1. 探索（理解させる）" },
      {
        type: "p",
        text: "まず関連コードを読ませ、現状を把握させます。`@` でファイルやフォルダを指定すると、対象を明示できます。",
      },
      { type: "code", code: "@src/auth/ のログイン処理を読んで、流れを説明して。まだコードは変えないで" },
      { type: "h", text: "2. 計画（[[計画モード]]）" },
      {
        type: "p",
        text: "`Shift + Tab` で[[計画モード]]に入る、または最初から `--permission-mode plan` で起動します。Claude は変更内容を書かずに手順だけ提案します。ここで方針をすり合わせます。",
      },
      { type: "code", code: "claude --permission-mode plan", terminal: true },
      { type: "h", text: "3. 実装（任せて確認する）" },
      {
        type: "p",
        text: "計画に納得したら実装させます。完了条件（テストが通る等）を添えると、Claude が自分で検証まで回します。途中の[[diff|差分]]を確認し、違えば `Esc` で止めて修正します。",
      },
      {
        type: "callout",
        tone: "tip",
        text: "画像も渡せます。デザインのスクリーンショットやエラー画面を貼り付ければ、それを見て実装・調査します。設計図やUIの再現に便利です。",
      },
      {
        type: "callout",
        tone: "note",
        text: "新しいタスクに移るときは `/clear` で[[コンテキスト]]を一度空にすると、前の話題に引きずられず精度が上がります（第9章）。",
      },
    ],
  },
  {
    slug: "git-github",
    num: 7,
    level: "実践",
    title: "Git と GitHub の連携",
    summary: "コミット・PR作成・レビューを Claude に任せ、履歴管理を加速する。",
    blocks: [
      {
        type: "p",
        text: "Claude Code は Git 操作が得意です。変更内容を読んで意図を汲んだ[[コミット]]メッセージを書いたり、プルリクエスト（PR）を作ったりできます。",
      },
      { type: "h", text: "コミットを任せる" },
      {
        type: "p",
        text: "[[ステージ]]した変更を確認させ、適切なメッセージで[[コミット]]してもらいます。",
      },
      { type: "code", code: "ステージ済みの変更を確認して、適切なコミットメッセージで commit して" },
      {
        type: "callout",
        tone: "warn",
        text: "Claude は明示的に頼まない限り、勝手に[[コミット]]やプッシュはしません。push・force push・PR作成のような「他者に見える操作」「取り消しにくい操作」は、原則あなたの確認を取ってから実行します。",
      },
      { type: "h", text: "PR の作成とレビュー" },
      {
        type: "p",
        text: "GitHub の `gh` CLI が入っていれば、ブランチの全変更を踏まえた PR を作成できます。コードレビューを頼むこともできます。",
      },
      { type: "code", code: "このブランチの変更をまとめて PR を作って。タイトルは簡潔に、本文に概要とテスト手順を入れて" },
      {
        type: "callout",
        tone: "tip",
        text: "GitHub の Issue や PR の URL を渡せば、`gh` 経由で内容を取得して作業できます。「この Issue を修正して PR を出して」のような依頼も可能です。",
      },
    ],
  },
  {
    slug: "claude-md-memory",
    num: 8,
    level: "実践",
    title: "CLAUDE.md とメモリ",
    summary: "プロジェクトの前提を記憶させ、毎回の説明を不要にする。",
    blocks: [
      {
        type: "p",
        text: "[[CLAUDE.md]]は、プロジェクトの約束事や前提を書いておくメモのファイルです。Claude は起動時にこれを自動で読み込むので、毎回同じ説明をしなくて済みます。",
      },
      {
        type: "p",
        text: "`/init` を実行すると、Claude がコードベースを調べて[[CLAUDE.md]]のたたき台を作ってくれます。",
      },
      { type: "code", code: "/init" },
      { type: "h", text: "何を書くとよいか" },
      {
        type: "list",
        items: [
          "ビルド・テスト・lint のコマンド（例: `npm run test`）",
          "コーディング規約やスタイルの方針",
          "ディレクトリ構成や重要ファイルの役割",
          "やってほしくないこと（例: このフォルダは触らない）",
        ],
      },
      { type: "h", text: "メモリの置き場所と優先順位" },
      {
        type: "table",
        head: ["場所", "対象範囲"],
        rows: [
          ["`./CLAUDE.md`", "プロジェクト共有（Gitで共有）"],
          ["`./CLAUDE.local.md`", "自分だけのプロジェクト設定（共有しない）"],
          ["`~/.claude/CLAUDE.md`", "全プロジェクト共通の個人設定"],
        ],
      },
      {
        type: "p",
        text: "`@別ファイル.md` と書けば他のファイルを読み込めます（インポート）。対話中に覚えさせたいことは、行頭で `#` と打つとその場でメモリに追記できます。",
      },
      {
        type: "callout",
        tone: "tip",
        text: "[[CLAUDE.md]]は「簡潔・具体的」が鉄則です。長すぎると要点がぼやけます。実際に使ってみて、Claude がよく間違える点を1行ずつ足していくのが効果的です。",
      },
    ],
  },
  {
    slug: "context-management",
    num: 9,
    level: "実践",
    title: "コンテキスト管理",
    summary: "Claude の「作業記憶」を整え、長い作業でも精度を保つ。",
    blocks: [
      {
        type: "p",
        text: "[[コンテキスト]]とは、Claude がいま会話の中で保持している情報のかたまりです。読んだファイル、これまでのやり取り、実行結果などが含まれます。これには上限（[[トークン]]の量）があり、増えすぎると精度や速度に影響します。",
      },
      { type: "h", text: "コンテキストを整える操作" },
      {
        type: "table",
        head: ["操作", "効果"],
        rows: [
          ["`/clear`", "履歴を完全にリセット。話題が変わるときに使う"],
          ["`/compact`", "会話を要約して圧縮し、要点を保ったまま軽くする"],
          ["`/context`", "いまの使用状況を確認する"],
          ["`Esc` 2回", "過去に戻って不要なやり取りをやり直す"],
        ],
      },
      {
        type: "p",
        text: "会話が長くなると Claude は自動で古い部分を要約（圧縮）するので、上限で作業が止まることは基本的にありません。とはいえ、関係ない情報が混ざると判断がぶれるため、能動的な整理が効きます。",
      },
      {
        type: "callout",
        tone: "tip",
        text: "鉄則は「**1タスク1セッション、終わったら `/clear`**」。新しい無関係な作業に移るときに履歴をリセットすると、前の話題に引きずられず精度が安定します。",
      },
    ],
  },
  {
    slug: "commands-cli-keys",
    num: 10,
    level: "実践",
    title: "コマンド・CLI・キーバインド",
    summary: "対話中のスラッシュコマンド、起動時のCLIフラグ、ショートカットを一望する。",
    blocks: [
      {
        type: "p",
        text: "操作は大きく3種類です。対話中に使う[[スラッシュコマンド]]、起動時に渡すCLIフラグ、そして[[キーバインド|ショートカット]]です。よく使うものを押さえましょう。",
      },
      { type: "h", text: "よく使うスラッシュコマンド" },
      {
        type: "table",
        head: ["コマンド", "意味"],
        rows: [
          ["`/help`", "ヘルプを表示"],
          ["`/clear`", "会話履歴をリセット"],
          ["`/compact`", "会話を要約して圧縮"],
          ["`/init`", "[[CLAUDE.md]]を生成"],
          ["`/review`", "コードレビューを依頼"],
          ["`/agents`", "[[サブエージェント]]の管理"],
          ["`/mcp`", "[[MCP]]サーバーの管理"],
          ["`/doctor`", "環境の診断"],
        ],
      },
      { type: "h", text: "よく使うCLIフラグ" },
      {
        type: "table",
        head: ["フラグ", "意味"],
        rows: [
          ["`-c` / `--continue`", "直前の[[セッション]]を再開"],
          ["`-r` / `--resume`", "過去のセッションを選んで再開"],
          ["`-p` / `--print`", "対話せず1回answerして終了（[[ヘッドレス]]実行）"],
          ["`--model`", "使うモデルを指定"],
          ["`--permission-mode`", "[[権限モード]]を指定して起動"],
          ["`--add-dir`", "作業対象に別フォルダを追加"],
        ],
      },
      { type: "h", text: "覚えておきたいキーバインド" },
      {
        type: "table",
        head: ["キー", "動作"],
        rows: [
          ["`Esc`", "実行を中断"],
          ["`Esc` 2回", "履歴をさかのぼって編集"],
          ["`Shift + Tab`", "[[権限モード]]切り替え"],
          ["`Ctrl + C`", "キャンセル／終了"],
        ],
      },
      {
        type: "callout",
        tone: "note",
        text: "より網羅的な一覧は「コマンド」ページにもまとめています。困ったらまず `/help` です。",
      },
    ],
  },
  {
    slug: "skills-and-commands",
    num: 11,
    level: "上級",
    title: "スキルとカスタムコマンド",
    summary: "繰り返す作業を自分専用の手順として定義し、再利用する。",
    blocks: [
      {
        type: "p",
        text: "同じ依頼を何度もするなら、手順を「部品」として登録できます。代表が**カスタム[[スラッシュコマンド]]**と**[[スキル]]**です。",
      },
      { type: "h", text: "カスタムスラッシュコマンド" },
      {
        type: "p",
        text: "`.claude/commands/` に Markdown ファイルを置くと、ファイル名がそのまま自分専用の[[スラッシュコマンド]]になります。例えば `.claude/commands/review.md` を作れば `/review` のように呼べます。",
      },
      {
        type: "code",
        code: "---\ndescription: 変更点をレビューする\n---\nステージ済みの差分をレビューして、バグ・抜け漏れ・命名の問題を指摘して。",
      },
      {
        type: "p",
        text: "本文に `$ARGUMENTS` と書くと、呼び出し時の引数を埋め込めます。プロジェクト共有なら `.claude/commands/`、個人用なら `~/.claude/commands/` に置きます。",
      },
      { type: "h", text: "スキル" },
      {
        type: "p",
        text: "[[スキル]]は、特定の作業のやり方をまとめた説明書（手順・参照ファイル・補助スクリプト）のパッケージです。Claude は状況に応じて必要なスキルを自動で読み込んで使います。複雑で再現性のある手順を、チームで共有したいときに有効です。",
      },
      {
        type: "callout",
        tone: "tip",
        text: "まずはカスタムコマンドから始めるのがおすすめです。「毎回ほぼ同じ文面で頼んでいる」と気づいたら、それをコマンド化するサインです。",
      },
    ],
  },
  {
    slug: "subagents",
    num: 12,
    level: "上級",
    title: "サブエージェント",
    summary: "専門特化の小さなエージェントに仕事を分担させ、文脈を汚さず並行処理する。",
    blocks: [
      {
        type: "p",
        text: "[[サブエージェント]]は、特定の役割に特化した小さな[[エージェント]]です。メインの Claude が、調査やレビューといった作業を別のサブエージェントに委任します。これには2つの利点があります。",
      },
      {
        type: "list",
        items: [
          "**文脈の隔離**: 大量の検索結果などをサブエージェント側で処理し、メインの[[コンテキスト]]を汚さない",
          "**並行処理**: 独立した作業を複数のサブエージェントに同時に走らせる",
        ],
      },
      { type: "h", text: "定義のしかた" },
      {
        type: "p",
        text: "`.claude/agents/` に Markdown ファイルを置いて定義します。冒頭の設定（フロントマター）で名前・役割・使える道具・モデルを指定します。",
      },
      {
        type: "code",
        code: "---\nname: code-reviewer\ndescription: 変更のレビューを専門に行う\ntools: Read, Grep, Bash\nmodel: sonnet\n---\nあなたは厳格なレビュアーです。バグ・セキュリティ・可読性の観点で指摘してください。",
      },
      {
        type: "p",
        text: "`/agents` コマンドで対話的に作成・管理できます。`description` は「いつこのエージェントを使うべきか」を明確に書くのがコツで、これを手がかりにメインが自動で委任先を選びます。",
      },
      {
        type: "callout",
        tone: "note",
        text: "標準で `Explore`（コード探索）・`Plan`（設計）・`general-purpose`（汎用）などが用意されています。まずはこれらの使われ方を観察し、足りない専門役割を自分で足していくとよいでしょう。",
      },
    ],
  },
  {
    slug: "mcp",
    num: 13,
    level: "上級",
    title: "MCP で外部ツールとつなぐ",
    summary: "データベース・課題管理・ブラウザなど、外部システムを Claude の手足にする。",
    blocks: [
      {
        type: "p",
        text: "[[MCP]]（Model Context Protocol）は、Claude を外部のツールやデータに接続するための共通規格です。これを使うと、GitHub・Slack・データベース・ブラウザ・デザインツールなどを Claude から直接操作できます。",
      },
      { type: "h", text: "サーバーを追加する" },
      {
        type: "p",
        text: "`claude mcp add` で接続先（MCPサーバー）を登録します。接続方式には `http` / `sse` / `stdio` があります。",
      },
      { type: "code", code: "claude mcp add --transport http github https://example.com/mcp", terminal: true },
      { type: "h", text: "スコープ（適用範囲）" },
      {
        type: "table",
        head: ["スコープ", "範囲"],
        rows: [
          ["`local`", "今のプロジェクトの自分だけ（既定）"],
          ["`project`", "プロジェクトで共有（`.mcp.json` に記録）"],
          ["`user`", "全プロジェクトの自分の環境"],
        ],
      },
      {
        type: "p",
        text: "登録状況は `/mcp` で確認・管理できます。`project` スコープで追加すると `.mcp.json` が作られ、Git で共有すればチーム全員が同じ接続を使えます。",
      },
      {
        type: "callout",
        tone: "warn",
        text: "[[MCP]]サーバーは外部とやり取りするため、信頼できる提供元のものだけを追加してください。不審なサーバーは、機密情報の漏えいや意図しない操作のリスクになります。",
      },
    ],
  },
  {
    slug: "hooks",
    num: 14,
    level: "上級",
    title: "Hooks で動作を自動化する",
    summary: "特定のタイミングで自分のコマンドを差し込み、整形・通知・検査を仕込む。",
    blocks: [
      {
        type: "p",
        text: "[[Hooks]]（フック）は、Claude の動作の節目で自動的に実行される、あなた独自のコマンドです。「ファイルを編集したら自動で整形する」「危険なコマンドをブロックする」といった仕組みを、お願いに頼らず**確実に**動かせます。",
      },
      { type: "h", text: "主なタイミング" },
      {
        type: "table",
        head: ["イベント", "発火のタイミング"],
        rows: [
          ["`PreToolUse`", "道具（編集・コマンド等）を使う直前。検査・ブロックに使う"],
          ["`PostToolUse`", "道具を使った直後。自動整形やテストに使う"],
          ["`Stop`", "Claude が応answerを終えたとき"],
          ["`SessionStart`", "[[セッション]]開始時。環境準備に使う"],
        ],
      },
      { type: "h", text: "設定例" },
      {
        type: "p",
        text: "`settings.json` に定義します。下は「ファイル編集後に Prettier で自動整形する」例です。",
      },
      {
        type: "code",
        code: '{\n  "hooks": {\n    "PostToolUse": [\n      {\n        "matcher": "Edit|Write",\n        "hooks": [\n          { "type": "command", "command": "npx prettier --write \\"$CLAUDE_FILE_PATHS\\"" }\n        ]\n      }\n    ]\n  }\n}',
      },
      {
        type: "callout",
        tone: "warn",
        text: "[[Hooks]]はあなたの権限で任意のコマンドを実行します。設定内容＝自分が責任を持つコードです。`PreToolUse` で終了コードを返せば操作をブロックでき、ガードレールとしても使えます。",
      },
    ],
  },
  {
    slug: "settings-and-permissions",
    num: 15,
    level: "上級",
    title: "設定と権限のコントロール",
    summary: "settings.json で許可ルールと環境を定義し、安全と効率を両立させる。",
    blocks: [
      {
        type: "p",
        text: "`settings.json` は Claude Code の振る舞いを細かく決める設定ファイルです。[[権限モード]]の既定値、許可・拒否するコマンド、[[環境変数]]などをここで管理します。",
      },
      { type: "h", text: "設定ファイルの場所と優先順位" },
      {
        type: "table",
        head: ["場所", "範囲"],
        rows: [
          ["`.claude/settings.json`", "プロジェクト共有（Gitで共有）"],
          ["`.claude/settings.local.json`", "自分だけのプロジェクト設定（共有しない）"],
          ["`~/.claude/settings.json`", "全プロジェクト共通の個人設定"],
        ],
      },
      {
        type: "p",
        text: "優先順位は概ね「管理者設定 → CLIフラグ → Local → Project → User」の順で、上位が勝ちます。チーム共有したい安全ルールは `project`、自分だけの好みは `local` か `user` に置きます。",
      },
      { type: "h", text: "permissions で許可をルール化する" },
      {
        type: "p",
        text: "`allow` / `ask` / `deny` で操作ごとの扱いを決められます。毎回確認が面倒な安全コマンドは `allow`、危険なものは `deny` にしておくと、確認の回数を減らしつつ事故を防げます。",
      },
      {
        type: "code",
        code: '{\n  "permissions": {\n    "allow": ["Bash(npm run test:*)", "Read"],\n    "deny": ["Bash(rm -rf:*)", "Read(./.env)"]\n  }\n}',
      },
      {
        type: "callout",
        tone: "tip",
        text: "`.env` や秘密鍵などの機密ファイルは `deny` で読み取り禁止にしておくと安心です。安全なルールは `project` スコープでチームに共有しましょう。",
      },
    ],
  },
  {
    slug: "automation-ci-parallel",
    num: 16,
    level: "上級",
    title: "自動化・CI・並列実行",
    summary: "ヘッドレス実行とワークツリーで、Claude を裏方の自動化に組み込む。",
    blocks: [
      {
        type: "p",
        text: "Claude Code は対話だけでなく、スクリプトやCIから呼び出す「裏方」としても使えます。鍵になるのが[[ヘッドレス]]実行と[[ワークツリー]]です。",
      },
      { type: "h", text: "ヘッドレス実行（-p）" },
      {
        type: "p",
        text: "`-p`（`--print`）を付けると、対話せずに1回answerして終了します。シェルスクリプトやCIに組み込めます。`--output-format json` で結果を機械処理しやすい形で受け取れます。",
      },
      { type: "code", code: 'claude -p "型エラーを修正して" --output-format json', terminal: true },
      { type: "h", text: "並列実行（ワークツリー）" },
      {
        type: "p",
        text: "[[ワークツリー]]を使うと、同じ[[リポジトリ]]の作業コピーを複数用意し、Claude を同時に走らせられます。`-w` フラグで隔離された作業環境を作れるので、別々のタスクを衝突させずに並行で進められます。",
      },
      { type: "code", code: "claude -w", terminal: true },
      {
        type: "callout",
        tone: "note",
        text: "CIで使う場合は、操作を限定した[[権限モード]]や `permissions` の `deny` を組み合わせ、Claude ができることを最小限に絞るのが安全です。`--allowedTools` で使える道具を明示するのも有効です。",
      },
    ],
  },
  {
    slug: "best-practices",
    num: 17,
    level: "上級",
    title: "ベストプラクティス",
    summary: "現場で効く、成果を最大化するための原則をまとめる。",
    blocks: [
      {
        type: "p",
        text: "ここまでの内容を踏まえ、日々の作業で成果を上げるための原則を整理します。",
      },
      {
        type: "list",
        ordered: true,
        items: [
          "**[[CLAUDE.md]]を育てる**: よく間違える点を1行ずつ足し、前提を共有する",
          "**探索→計画→実装**: 大きな変更は[[計画モード]]で方針を固めてから着手する",
          "**1タスク1セッション**: 話題が変わったら `/clear` で[[コンテキスト]]を整える",
          "**具体的に頼む**: ゴール・文脈・完了条件を添える。ログはそのまま貼る",
          "**こまめに確認する**: [[diff|差分]]を見て、違えば `Esc` で止めて言い直す",
          "**検証を任せる**: 「テストが通るまで」と完了条件を渡し、自己チェックさせる",
          "**繰り返しは部品化**: 定番依頼はカスタムコマンドや[[スキル]]にする",
          "**権限は最小限に**: `permissions` で危険操作を `deny`、安全操作を `allow`",
        ],
      },
      {
        type: "callout",
        tone: "tip",
        text: "うまくいかないときは、たいてい「Claude が悪い」のではなく「情報が足りない」ことが原因です。人間の新メンバーに頼むつもりで、文脈と判断材料を渡しましょう。",
      },
      {
        type: "callout",
        tone: "note",
        text: "そして最も大切なのは、実際に手を動かして試すことです。小さなタスクから任せ、確認しながら任せる範囲を広げていけば、自然と「使いこなし」が身につきます。",
      },
    ],
  },
  {
    slug: "troubleshooting",
    num: 18,
    level: "上級",
    title: "トラブルシューティング",
    summary: "詰まったときの診断手順と、よくある問題への対処を押さえる。",
    blocks: [
      {
        type: "p",
        text: "うまく動かないときの基本は、まず状態を確認することです。`/doctor`（または `claude doctor`）で環境を診断できます。",
      },
      { type: "code", code: "claude doctor", terminal: true },
      { type: "h", text: "よくある症状と対処" },
      {
        type: "table",
        head: ["症状", "対処"],
        rows: [
          ["起動しない／古い", "`claude update` で最新版に更新する"],
          ["ログインできない", "`claude auth status` で状態確認、`claude auth login` で再ログイン"],
          ["[[権限]]で止まる", "[[権限モード]]や `permissions` 設定を見直す（第15章）"],
          ["的外れな応answer", "`/clear` で[[コンテキスト]]を整理し、依頼を具体的にする"],
          ["[[MCP]]がつながらない", "`/mcp` で接続状態を確認、サーバーの起動とURLを点検"],
          ["動作が重い", "`/compact` で会話を圧縮、不要なファイル参照を減らす"],
        ],
      },
      {
        type: "callout",
        tone: "tip",
        text: "解決しないときは `--verbose` で詳細ログを出すと原因の手がかりが得られます。公式ドキュメント（code.claude.com）やコミュニティも頼りになります。",
      },
      {
        type: "callout",
        tone: "note",
        text: "ここまでで入門から上級までを一通り学びました。あとは実際のプロジェクトで使いながら、この教科書を辞書のように見返してください。お疲れさまでした。",
      },
    ],
  },
];

const chapterMap = new Map(chapters.map((c) => [c.slug, c]));

export function getChapter(slug: string): Chapter | undefined {
  return chapterMap.get(slug);
}

export function getAdjacentChapters(slug: string): {
  prev?: Chapter;
  next?: Chapter;
} {
  const idx = chapters.findIndex((c) => c.slug === slug);
  return {
    prev: idx > 0 ? chapters[idx - 1] : undefined,
    next: idx >= 0 && idx < chapters.length - 1 ? chapters[idx + 1] : undefined,
  };
}
