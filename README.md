# Posts site  изучение Vue 3 +(Router, Vuex, CompositionAPI)  
### videokurs https://www.youtube.com/watch?v=XzLuMtDelGk&t=7888s

#### В приложении реализован следующий функционал:
- получения постов, по get запросу с использованием библиотеки Axios;   
- routing для многостраничности;  
- посты на странице добавляются и удаляются с анимацией;  
- сортировка по названию поста и по содержимому с анимацией;  
- открытие поста с переходом на новую страницу;  
- по достижению нижней границы екрана и пересечении блока с зеленой строкой отслеживается пересечение и подгружается новая порция постов (limit 10)
- также реализован постраничный переход между страницами с постами (закоментирован в PastPage)
- функционал реализован с использованием трех реализаций с вызовом разных страниц -    
   - "Посты"  со стандартным подходом;
   - "Посты Store" c использованием Vuex;
   - "Посты Compos" с использованием Composition API;    
#### В процессе декомпозиции вынесены в отдельные модули и компоненты:
- модули components\UI\
  -  кнопка - MyButton;
  -  диалоговое окно - MyDialog;
  -  input - MyInput;
  -  select - MySelect;
  -  меню - NavBar.  
- компоненты components\ :
  -  PostForm;
  -  PostItem;
  -  PostList.  
- пользовательские директивы directives\: 
   - VFocus - фокусировка на элементе;    
   - VIntersection - пересечение элемента;
- миксины mixins\:
   - toggleMixin  -  тогл.  
#### Функционал "Посты Compose" ограничен, исключены функции:  
   - Создание / Удаление поста;  
   - Подгрузка постов по скролу к последнему.  
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
