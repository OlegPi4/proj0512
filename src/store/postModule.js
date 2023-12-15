import axios from 'axios';
 
 export const postModule = {
    state: () => ({
      posts: [],
      isPostLoading: false,
      selectedSort: '',
      searchQuery: '',
      page: 0,
      limit: 10,
      totalPages: 0,
      sortOptions: [
         {value: 'title', name: 'По названию'},
         {value: 'body', name: 'По содержимому'},
         //{value: 'userId', name: 'По user'}
      ]
    }),
    getters: {
      sortedPosts(state) {
         return [...state.posts].sort((post1, post2) => {

            return post1[state.selectedSort]?.localeCompare(post2[state.selectedSort])
         })
      },
      sortedAndSearchedPosts(state, getters) {
         return getters.sortedPosts.filter(post => post.title.toLowerCase().includes(state.searchQuery.toLowerCase()))
      }
    },
    mutations: {
      setPosts(state, posts) {
         state.posts = posts;
      },
      setLoading(state, bool) {
         state.isPostLoading = bool;
      },
      setSelectedSort(state, selectedSort) {
         state.selectedSort = selectedSort;
      },
      setSearcQuery(state, searchQuery) {
         state.searchQuery = searchQuery;
      },
      setPage(state, page) {
         state.page = page;
      },
      setTotalPages(state, totalPages) {
         state.totalPages = totalPages;
      },
    },
    actions: {
      delPost({state, commit}, post){
         commit('setPosts', state.posts.filter(p => p.id != post.id) )
      },
      async fetchPosts({state, commit}) {
         try {
            commit('setLoading', true)
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
               params: {
               _page: state.page,
               _limit: state.limit
               }
            });
            commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit))
            commit('setPosts', response.data)
         } catch (e) {
            console.log(e);
         } finally {
            commit('setLoading', false)
         }
      },
      async loadMorePosts({state, commit}) {
         try {
            commit('setPage', state.page += 1)
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
               params: {
               _page: state.page,
               _limit: state.limit
               }
            });
            commit('setTotalPages', Math.ceil(response.headers['x-total-count'] / state.limit))
            commit('setPosts', [...state.posts, ...response.data]);
         } catch (e) {
            console.log(e);
         } finally {
            
         }
      }
   },
   namespaced: true
}