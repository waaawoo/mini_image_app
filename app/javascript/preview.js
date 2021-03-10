document.addEventListener("DOMContentLoaded", function(){
  // 画像表示領域の要素を取得
  const ImageList = document.getElementById("image-list");
  // ファイルが選択されていませんの箇所に変化が起きたらイベント発火
  document.getElementById("message_image").addEventListener("change", function(e){
    // 画像情報がEventハッシュに格納されているので変数へ格納する
    const file = e.target.files[0];
    // 引数に渡した画像のURLを作成
    const blob = window.URL.createObjectURL(file);

    // jsでhtmlを生成する
    // divタグを生成
    const imageElement = document.createElement("div");
    // imgタグを生成
    const blobImage = document.createElement("img");
    // 上で生成したimgタグのsrc属性に作成したURLを指定
    blobImage.setAttribute("src", blob);
    // 作成したdivタグの中にimgタグを追加する
    imageElement.appendChild(blobImage);
    // 既存のHTMLへ作成したdivタグを挿入
    ImageList.appendChild(imageElement);

  });
});
