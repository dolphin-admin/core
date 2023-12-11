import { Lang } from './enums'

/**
 * 语言工具类
 * @summary 用于处理国际化相关的逻辑
 * @author Bruce Song <recall4056@gmail.com>
 * @license MIT
 */
export class LangUtils {
  /**
   * 语言存储键名
   * @description 用于存储语言到 `localStorage` 中的键名
   * @default "lang"
   */
  private static LANG_KEY = 'lang'

  /**
   * 获取语言
   * @description 获取 `localStorage` 中存储的语言
   * @returns `localStorage` 中存储的语言
   * @example
   * ```ts
   * const lang = LangUtils.getLang()
   * ```
   */
  static getLang(): string | null {
    return localStorage.getItem(this.LANG_KEY)
  }

  /**
   * 设置语言
   * @description 设置 `localStorage` 中存储的语言
   * @param lang - 语言
   * @example
   * ```ts
   * LangUtils.setLang("zh-CN")
   * ```
   */
  static setLang(lang: string) {
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
   * - 注意：其他情况返回空字符串
   * @returns 浏览器语言
   * @example
   * ```ts
   * const lang = LangUtils.getBrowserLang()
   * ```
   */
  static getBrowserLang(fallbackLang?: string): string {
    const lang = window.navigator.language
    if (lang.includes('zh')) {
      return Lang['zh-CN']
    }
    if (lang.includes('en')) {
      return Lang['en-US']
    }
    return fallbackLang ?? ''
  }

  /**
   * 获取默认语言
   * @description
   * 1. 优先使用 `localStorage` 中的 `lang`
   * 2. 其次使用浏览器语言
   * 3. 都没有就返回空字符串
   * @returns 默认语言
   * @example
   * ```ts
   * const lang = LangUtils.getDefaultLang()
   * ```
   */
  static getDefaultLang(fallbackLang?: string): string {
    return this.getLang() ?? this.getBrowserLang(fallbackLang)
  }

  /**
   * 设置 HTML 标签语言
   * @param lang - 语言
   * @example
   * ```ts
   * LangUtils.setHtmlLang("zh-CN")
   * ```
   */
  static setHtmlLang(lang: string) {
    document.querySelector('html')?.setAttribute('lang', lang)
  }

  /**
   * 初始化国际化字段的对象
   * @example
   * ```ts
   * const i18nObj = LangUtils.initI18nObj()
   * ```
   */
  static initI18nObj() {
    Object.values(Lang).reduce<Record<string, string>>((acc, cur) => {
      // eslint-disable-next-line no-param-reassign
      acc[cur] = ''
      return acc
    }, {})
  }

  /**
   * 遍历语言枚举
   * @param cb - 回调函数
   * @example
   * 调用方式类似 map，数组限制为使用 Lang 枚举
   * ```ts
   * LangUtils.langMapTo(lang => {
   *  // ...
   * })
   */
  static langMap<T>(cb: (lang: Lang) => T): T[] {
    return Object.values(Lang).map(cb)
  }
}
