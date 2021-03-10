// URLにnew editがない場合は実行されない処理を追加
if (document.URL.match( /new/ ) || document.URL.match( /edit/ ) ){
  document.addEventListener("DOMContentLoaded", function(){
    // 画像表示領域の要素を取得
    const ImageList = document.getElementById("image-list");

    // HTML生成文を関数化
    const createImageHTML = (blob) => {
    // jsでhtmlを生成する
    // divタグを生成
    const imageElement = document.createElement("div");
    // Div要素にクラス名を付与
    imageElement.setAttribute("class", "image-element")
    // クラス名分の要素数を変数へ格納
    let imageElementNum = document.querySelectorAll(".image-element").length
    // imgタグを生成
    const blobImage = document.createElement("img");
    // 上で生成したimgタグのsrc属性に作成したURLを指定
    blobImage.setAttribute("src", blob);

    // 画像を追加するようにinputタグを用意imageElementNumは何番目かを判別する
    const inputHTML = document.createElement("input")
    inputHTML.setAttribute("id", `message_image_${imageElementNum}`)
    inputHTML.setAttribute('name', "message[images][]")
    inputHTML.setAttribute('type', 'file')

    // 作成したdivタグの中にimgタグを追加する
    imageElement.appendChild(blobImage);
    // input要素をHTMLへ作成
    imageElement.appendChild(inputHTML);
    // 既存のHTMLへ作成したdivタグを挿入
    ImageList.appendChild(imageElement);

    // ２枚目以降の発火
    inputHTML.addEventListener('change', (e) => {
      file = e.target.files[0];
      blob = window.URL.createObjectURL(file);

      createImageHTML(blob)
    });
    }

    // ファイルが選択されていませんの箇所に変化が起きたらイベント発火
    document.getElementById("message_image").addEventListener("change", function(e){

      // 画像が表示されている場合、すでに存在している画像を削除する
      // const imageContent = document.querySelector('img');
      // if(imageContent){
      //   imageContent.remove();
      // }

      // 画像情報がEventハッシュに格納されているので変数へ格納する
      const file = e.target.files[0];
      // 引数に渡した画像のURLを作成
      const blob = window.URL.createObjectURL(file);
      createImageHTML(blob);
    });
  });
}
