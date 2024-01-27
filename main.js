

var updateViews = function() {
  var activeItems = document.querySelectorAll('[data-name="Active Items"] .sc-list-item');

  document.querySelectorAll('[data-name="Active Items"] .sc-list-item').forEach(function(element) {
    var quantity = element.getAttribute('data-quantity');
    if(quantity > 1) {
      element.style.border = "5px solid red";
    }
  });
}



// Mutation Observerのコールバック関数
var callback = function(mutationsList, observer) {
  for(var mutation of mutationsList) {
    if (mutation.type === 'childList') {
      updateViews();
    }
  }
};

// オブザーバーの作成
var observer = new MutationObserver(callback);

// 監視の設定
var config = { childList: true };

// 特定のエレメントを選択し、監視を開始
var targetNode = document.querySelector('[data-name="Active Items"]');
observer.observe(targetNode, config);

// 必要がなくなったら監視を停止
// observer.disconnect();

updateViews();

