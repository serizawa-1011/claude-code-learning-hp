export type CommandCategory = "スラッシュコマンド" | "CLI" | "キーバインド";

export interface CommandEntry {
  command: string;
  category: CommandCategory;
  description: string;
}

// 一般によく知られた範囲の代表的なコマンドのみ掲載。
export const commands: CommandEntry[] = [
  // スラッシュコマンド（対話中に入力）
  { command: "/help", category: "スラッシュコマンド", description: "使い方とコマンド一覧を表示する" },
  { command: "/clear", category: "スラッシュコマンド", description: "会話の文脈をクリアして新しく始める" },
  { command: "/init", category: "スラッシュコマンド", description: "リポジトリを解析して CLAUDE.md を生成する" },
  { command: "/review", category: "スラッシュコマンド", description: "変更内容（diff）をレビューしてもらう" },
  { command: "/config", category: "スラッシュコマンド", description: "テーマやモデルなどの設定を変更する" },
  { command: "/model", category: "スラッシュコマンド", description: "使用するモデルを切り替える" },
  { command: "/cost", category: "スラッシュコマンド", description: "現在のセッションのトークン使用量・コストを表示する" },
  { command: "/compact", category: "スラッシュコマンド", description: "会話履歴を要約して文脈を圧縮する" },
  { command: "/context", category: "スラッシュコマンド", description: "現在のコンテキスト使用状況を表示する" },
  { command: "/agents", category: "スラッシュコマンド", description: "サブエージェントを作成・管理する" },
  { command: "/mcp", category: "スラッシュコマンド", description: "MCPサーバーの接続を確認・管理する" },
  { command: "/doctor", category: "スラッシュコマンド", description: "環境を診断して問題を見つける" },

  // CLI（ターミナルで起動）
  { command: "curl -fsSL https://claude.ai/install.sh | bash", category: "CLI", description: "公式インストーラで導入する（macOS / Linux / WSL）" },
  { command: "claude", category: "CLI", description: "対話セッションを起動する" },
  { command: "claude \"<prompt>\"", category: "CLI", description: "プロンプトを渡して起動する" },
  { command: "claude -c", category: "CLI", description: "直前のセッションを再開する（continue）" },
  { command: "claude -r", category: "CLI", description: "過去のセッションを選んで再開する（resume）" },
  { command: "claude -p \"<prompt>\"", category: "CLI", description: "非対話モードで実行し結果を出力する（print / ヘッドレス）" },
  { command: "claude --permission-mode plan", category: "CLI", description: "権限モードを指定して起動する（例: 計画モード）" },
  { command: "claude --model <name>", category: "CLI", description: "使用するモデルを指定して起動する" },
  { command: "claude -w", category: "CLI", description: "ワークツリーで隔離された作業環境を作って起動する" },
  { command: "claude mcp add", category: "CLI", description: "MCPサーバー（外部ツール接続）を追加する" },
  { command: "claude update", category: "CLI", description: "Claude Code を最新版に更新する" },
  { command: "claude doctor", category: "CLI", description: "環境を診断する" },
  { command: "claude auth status", category: "CLI", description: "ログイン状態を確認する" },

  // キーバインド（対話中）
  { command: "Esc", category: "キーバインド", description: "実行中の処理を中断する" },
  { command: "Esc → Esc", category: "キーバインド", description: "履歴をさかのぼってメッセージを編集する" },
  { command: "Shift + Tab", category: "キーバインド", description: "モード（通常 / 自動承認 / 計画）を切り替える" },
  { command: "Ctrl + C", category: "キーバインド", description: "入力のクリア、または終了" },
  { command: "# <メモ>", category: "キーバインド", description: "行頭で # と打つと CLAUDE.md にメモを追記する" },
  { command: "@<パス>", category: "キーバインド", description: "ファイルやフォルダを指し示して文脈に含める" },
  { command: "↑ / ↓", category: "キーバインド", description: "入力履歴を移動する" },
];
