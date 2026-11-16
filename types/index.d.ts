declare module 'claude-code' {
  interface PluginState {
    'cold-cache-guard': {
      /** Epoch ms when the last main-thread request started; null before the first answer. */
      lastAnswerAtMs: number | null
      /** Tokens a resumed transcript's next request re-sends, until a live figure exists. */
      resumedTokens: number | null
      /** The person already chose for the current cold spell; the next answer clears it. */
      isSettled: boolean
    }
  }
}
