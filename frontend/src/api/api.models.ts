export interface ApiResponse<ResultType = any> {
  ok: boolean
  result: ResultType
  error: string
}

export type ZeroOrCross = 'X' | '0'

export type Board = (number | string)[][]

interface GameResult {
  winner: string
  team: ZeroOrCross
  ts: number
}

export interface ScoreResponse {
  ai: number
  player: number
  X: number
  O: number
  list: GameResult[]
}

export interface GameResponse {
  player: ZeroOrCross
  ai: ZeroOrCross
  board: Board
  nextMove: 'player'
  end: boolean
  winner?: 'ai' | 'player'
  team?: ZeroOrCross
}
