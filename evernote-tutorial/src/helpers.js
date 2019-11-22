// update database live
// wait for the user to stop typing 
export default function debounce(a,b,c){
    var d,e;
    return function(){
      function h(){
        d=null;
        c||(e=a.apply(f,g));
      }
      var f=this,g=arguments;
      return (clearTimeout(d),d=setTimeout(h,b),c&&!d&&(e=a.apply(f,g)),e)
    }
  }
  
// remove HTML for the preview
// actually stores the actual HTML 
// 
// this function convert the HTML into 
export function removeHTMLTags (str) {
    return str.replace(/<[^>]*>?/gm, '');
};