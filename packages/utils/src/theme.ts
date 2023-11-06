import type { Theme } from './types'

export class ThemeUtils {
  /**
   * 主题存储键名
   */
  private static THEME_KEY = 'theme'

  /**
   * 获取主题
   * @description 从 `localStorage` 中读取主题
   * @example
   * ```ts
   * ThemeUtils.getTheme()
   * ```
   */
  static getTheme(): string | null {
    return localStorage.getItem(this.THEME_KEY)
  }

  /**
   * 设置主题
   * @param theme
   * @description 将主题存储到 `localStorage` 中
   * @example
   * ```ts
   * ThemeUtils.setTheme('light')
   * ThemeUtils.setTheme('dark')
   * ```
   */
  static setTheme(theme: Theme) {
    localStorage.setItem(this.THEME_KEY, theme)
  }

  /**
   * 清除主题
   * @description 从 `localStorage` 中移除主题
   * @example
   * ```ts
   * ThemeUtils.clearTheme()
   * ```
   */
  static clearTheme() {
    localStorage.removeItem(this.THEME_KEY)
  }

  /**
   * 获取默认主题
   * @description 从 `localStorage` 中读取主题，如果没有读取到，则根据系统主题设置返回默认主题
   * @example
   * ```ts
   * ThemeUtils.getDefaultTheme()
   * ```
   */
  static getDefaultTheme(): Theme {
    if (
      this.getTheme() === 'dark' ||
      (!this.getTheme() && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      return 'dark'
    }
    return 'light'
  }

  /**
   * 切换主题
   * @description
   * - 切换主题模式时，会自动添加或移除 document 上 `dark` 类名
   * - 将主题模式存储到 `localStorage` 中，以便下次打开页面时读取
   * @example
   * ```ts
   * ThemeUtils.changeTheme('light')
   * ThemeUtils.changeTheme('dark')
   * ```
   */
  static changeTheme(theme: Theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
      document.documentElement.setAttribute('data-theme', 'dark')
      ThemeUtils.setTheme('dark')
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.setAttribute('data-theme', 'light')
      ThemeUtils.setTheme('light')
    }
  }
}
