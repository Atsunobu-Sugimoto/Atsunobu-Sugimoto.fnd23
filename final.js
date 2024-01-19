'use strict'; /* 厳格にエラーをチェック */

{ /* ローカルスコープ */

  // DOM取得
  const tabMenus = document.querySelectorAll('.tab_menu-item');
  console.log(tabMenus);

  // イベント付加
  tabMenus.forEach((tabMenu) => {
    tabMenu.addEventListener('click', tabSwitch);
  })

  // イベントの処理
  function tabSwitch(e) {

    // クリックされた要素のデータ属性を取得
    const tabTargetData = e.currentTarget.dataset.tab;
    // クリックされた要素の親要素と、その子要素を取得
    const tabList = e.currentTarget.closest('.tab_menu');
    console.log(tabList);
    const tabItems = tabList.querySelectorAll('.tab_menu-item');
    console.log(tabItems);
    // クリックされた要素の親要素の兄弟要素の子要素を取得
    const tabPanelItems = tabList.
    nextElementSibling.querySelectorAll('.tab_panel-box');
    console.log(tabPanelItems);

    // クリックされたtabの同階層のmenuとpanelのクラスを削除
    tabItems.forEach((tabItem) => {
      tabItem.classList.remove('is-active');
    })
    tabPanelItems.forEach((tabPanelItem) => {
      tabPanelItem.classList.remove('is-show');
    })

    // クリックされたmenu要素にis-activeクラスを付加
    e.currentTarget.classList.add('is-active');
    // クリックしたmenuのデータ属性と等しい値を持つパネルにis-showクラスを付加
    tabPanelItems.forEach((tabPanelItem) => {
      if (tabPanelItem.dataset.panel ===  tabTargetData) {
        tabPanelItem.classList.add('is-show');
      }
    })

  }

// }

// アコーディオン　ここから
// {
  // アコーディオン
  // DOM取得
  const parent = document.querySelectorAll('.js-qa__parent');
  console.log(parent);

  // イベント
  for (let i = 0; i < parent.length; i++) {
      // clickイベントを付加
      parent[i].addEventListener('click', accodionToggle);
  }

  // 処理
  function accodionToggle(e) {
      // クリックした要素にクラスを付加
      e.currentTarget.classList.toggle('is-open');
      // クリックした要素の兄弟要素を取得
      const child = e.currentTarget.nextElementSibling;
      //　兄弟要素にクラスを付加
      child.classList.toggle('is-open');
  }
}

// アコーディオン　ここまで
