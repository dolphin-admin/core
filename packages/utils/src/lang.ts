import { Lang } from './types'

export class LangUtils {
  /**
   * 语言存储键名
   */
  private static LANG_KEY = 'lang'

  /**
   * 获取语言
   * @description 获取 `localStorage` 中存储的语言
   * @example
   * ```ts
   * LangUtils.getLang()
   * ```
   */
  static getLang() {
    return localStorage.getItem(this.LANG_KEY)
  }

  /**
   * 设置语言
   * @description 设置 `localStorage` 中存储的语言
   * @param lang 语言
   * @example
   * ```ts
   * LangUtils.setLang(Lang['zh-CN'])
   * ```
   */
  static setLang(lang: Lang) {
    localStorage.setItem(this.LANG_KEY, lang)
  }

  /**
   * 清除语言
   * @description 清除 `localStorage` 中存储的语言
   * @example
   * ```ts
   * LangUtils.clearLang()
   * ```
   */
  static clearLang() {
    localStorage.removeItem(this.LANG_KEY)
  }

  /**
   * 获取浏览器语言
   * @description
   * - 包含 `zh`，返回中文 `zh-CN`
   * - 包含 `en`，返回英文 `en-US`
   * - 其他情况返回空字符串
   * @example
   * ```ts
   * LangUtils.getBrowserLang()
   * ```
   */
  static getBrowserLang() {
    const lang = window.navigator.language
    if (lang.includes('zh')) return Lang['zh-CN']
    if (lang.includes('en')) return Lang['en-US']
    return ''
  }

  /**
   * 获取默认语言
   * @description
   * 1. 优先使用 `localStorage` 中的 `lang`
   * 2. 其次使用浏览器语言
   * 3. 都没有就默认中文
   * @example
   * ```ts
   * LangUtils.getDefaultLang()
   * ```
   */
  static getDefaultLang() {
    const lang = this.getLang()
    const browserLang = this.getBrowserLang()

    return lang ?? browserLang ?? Lang['zh-CN']
  }
}
