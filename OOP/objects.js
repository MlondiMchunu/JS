<html>
  <head>
    <script>
     var book = {
        "title":"Javascript",
        "author":"Mlondie",
        "year":"2024",
        "price":"R500"
      };

     function disp(){
       document.write(book.title+"</br>"+book.author+"</br>"+book.year+"</br>"+book.price);
    };
    </script>
  </head>
  <body>

  <form>
   <input type="button" value="Display" onclick="disp()">
  </form>

  </body>
</html>