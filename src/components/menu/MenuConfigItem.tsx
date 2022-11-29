export class MenuConfigItem {
  static AllPage: MenuConfigItem = new MenuConfigItem(1, 'All', '');
  static DocumentaryPage: MenuConfigItem = new MenuConfigItem(2, 'Documentary', 'documentary');
  static ComedyPage: MenuConfigItem = new MenuConfigItem(3, 'Comedy', 'comedy');
  static HorrorPage: MenuConfigItem = new MenuConfigItem(4, 'Horror', 'horror');
  static CrimePage: MenuConfigItem = new MenuConfigItem(5, 'Crime', 'crime');

  private constructor(
    readonly id: number,
    readonly pageName: string,
    readonly value: string
  ) { }

  static asList(): MenuConfigItem[] {
    return Object.keys(MenuConfigItem)
      .map((key) => MenuConfigItem[key]);
  }

}