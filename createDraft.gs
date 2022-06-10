function createNippo() {
  // 件名作成
  const header = '【SUP日報】';
  // const header = sheet2.getRange(2,2).getValue();
  
  const date = new Date();
  let formatDate = Utilities.formatDate(date, "JST","yyMMdd");
  
  //////// 編集箇所 ここから ////////
  const enterprize = 'LMI'
  const company = 'PD室'
  const name = '高草木和史'
  //////// 編集箇所 ここまで ////////


  //宛先設定
  let to = "lmcollege@lmi.ne.jp"
  
  //////// 編集箇所 ここから ////////
  var options = {
    // "attachments" : 添付ファイル,
    "cc":"miyazaki.takayuki@lmi.ne.jp,pd_all@lmi.ne.jp,pd-shinsotsu@lmi.ne.jp",
    "bcc":"imura.yuudai@lmi.ne.jp,tenjin.kazuaki@link-cc.co.jp",
    // "replyTo" ： 返信先アドレス,
    // "noReply" ： 返信不可フラグ,
    // "name" ： 送信者の名前
  };
  //////// 編集箇所 ここまで ////////

  
  const title = header + formatDate + '_' + enterprize + '_' + company + '_' + name;

  //Draft作成
  GmailApp.createDraft(
    to,
    title,
    'テストメールですです',
    options
  )
}
