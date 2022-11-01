export class MenuConfigItem {
  static AllPage: MenuConfigItem = new MenuConfigItem(1, 'All');
  static DocumentaryPage: MenuConfigItem = new MenuConfigItem(2, 'Documentary');
  static ComedyPage: MenuConfigItem = new MenuConfigItem(3, 'Comedy');
  static HorrorPage: MenuConfigItem = new MenuConfigItem(4, 'Horror');
  static CrimePage: MenuConfigItem = new MenuConfigItem(5, 'Crime');

  private constructor(
    readonly id: number,
    readonly pageName: string,
  ) { }

  static asList(): MenuConfigItem[] {
    return Object.keys(MenuConfigItem)
      .map((key) => MenuConfigItem[key]);
  }

}