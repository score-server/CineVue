/**
 * @author Wetwer
 * @project CineVue
 * @created 06.02.2018
 **/

const root = 'http://scorewinner.ch:8082';

const Api = {

  /*
   * Blog
   */

  BLOG_LIST: () => `${root}/blog`,

  BLOG_CREATE: (title, description) => `${root}/blog/create?title=${title}&text=${description}`,

  BLOG_DELETE: (blogId) => `${root}/blog/${blogId}/delete`,

  /*
   * Comment
   */

  COMMENT_MOVIE: (movieId, comment) => `${root}/comment/add/movie?movieId=${movieId}&comment=${comment}`,

  COMMENT_EPISODE: (episodeId, comment) => `${root}/comment/add/episode?episodeId=${episodeId}&comment=${comment}`,

  /*
   * Control Center
   */

  CONTROL: () => `${root}/control`,

  INFO: () => `${root}/info`,

  /*
   * Activity
   */

  ACTIVITY_LOGS: () => `${root}/control/activityLogs`,
  ACTIVITY_CLEAR: () => `${root}/control/clearactivity`,

  /*
   * Error
   */

  ERRORS: () => `${root}/control/error`,

  /*
   * Import
   */

  IMPORT_IMPORT_MOVIE: () => `${root}/import/movie`,

  IMPORT_UPDATE_MOVIE: () => `${root}/import/movie/update`,

  IMPORT_PATH_MOVIE: (path) => `${root}/import/path/movie?path=${path}`,

  IMPORT_IMPORT_EPISODE: () => `${root}/import/episode`,

  IMPORT_UPDATE_EPISODE: () => `${root}/import/episode/update`,

  IMPORT_PATH_EPISODE: (path) => `${root}/import/path/episode?path=${path}`,

  IMPORT_RESET: () => `${root}/import/reset`,

  IMPORT_LOGS: () => `${root}/control/importLogs`,

  IMPORT_CLEAR: () => `${root}/control/clear`,

  IMPORT_STATUS: () => `${root}/reactive/importstatus`,

  /*
   * Restart
   */

  RESTART_SCEDULE: (time) => `${root}/control/scedule?time=${time}`,

  RESTART_CANCEL: () => `${root}/control/scedule/cancel`,

  /*
   * SERIES
   */

  EPISODE: (episodeId) => `${root}/episode/${episodeId}`,

  EPISODE_PATH: (episodeId, path) => `${root}/episode/${episodeId}/path?path=${path}`,

  SEASON: (seasonId) => `${root}/season/${seasonId}`,

  SERIE: (serieId) => `${root}/serie/${serieId}`,

  SERIE_LIST: (search, genre) => `${root}/serie?search=${search}&genre=${genre}`,


  /*
   * FAST LOGIN
   */

  FASTLOGIN_CHECK: (authkey) => `${root}/fastlogin/${authkey}`,

  FASTLOGIN_REGISTER: (userId, username, password, passwordConfirm, player) => `${root}/fastlogin/settings/${userId}?name=${username}&password=${password}&confirm=${passwordConfirm}&player=${player}`,

  /*
   * GROUP
   */

  GROUP_LIST: () => `${root}/group`,

  GROUP_ADD_USER: (groupId, username) => `${root}/group/${groupId}/add?name=${username}`,

  GROUP_REMOVE_USER: (userId) => `${root}/group/remove/${userId}`,

  GROUP_ACTIVATION: (groupId) => `${root}/group/delete/${groupId}`,

  GROUP_NEW: (groupName) => `${root}/group/new?name=${groupName}`,

  /*
   * LIST
   */

  LIST: () => `${root}/list`,

  LIST_DETAIL: (listId) => `${root}/list/${listId}`,

  LIST_CREATE: (title, description) => `${root}/timeline/new?title=${title}&description=${description}`,

  LIST_ATTRIBUTES: (listId, title, description) => `${root}/timeline/attributes/${listId}?title=${title}&description=${description}`,

  LIST_ADD_MOVIE: (listId, movieId, place) => `${root}/timeline/edit/${listId}?movie=${movieId}&place=${place}`,

  LIST_REMOVE_MOVIE: (movieId) => `${root}/timeline/delete/movie/${movieId}`,

  /*
   * LOGIN
   */

  LOGIN: (username, password) => `${root}/login?name=${username}&password=${password}`,

  LOGOUT: () => `${root}/login/logout`,

  LOGOUT_SESSION: (sessionId) => `${root}/login/logout/${sessionId}`,
  'movieCount': () => `${root}/movie-count`,

  /*
   * REGISTER
   */

  REGISTER_NAME: (username) => `${root}/register?name=${username}`,

  REGISTER_GROUPKEY: (groupKey, username, password, passwordConfirm, player) => `${root}/register/${groupKey}?name=${username}&password=${password}&confirm=${passwordConfirm}&player=${player}`,

  /*
   * MOVIE
   */

  MOVIE_LIST: (page, search, orderBy, genre) => `${root}/movies/${page}?search=${search}&orderBy=${orderBy}&genre=${genre}`,

  MOVIE: (movieId) => `${root}/movie/${movieId}`,

  MOVIE_ATTRIBUTES: (movieId, quality, year, tmdbId) => `${root}/movie/${movieId}/attributes?quality=${quality}&year=${year}&tmdbId=${tmdbId}`,

  MOVIE_LIKE: (movieId) => `${root}/movie/${movieId}/like`,

  MOVIE_PATH: (movieId, path) => `${root}/movie/${movieId}/path?path=${path}`,


  /*
   * USER
   */

  USER_LIST: (search) => `${root}/user?search=${search}`,

  USER: (userId) => `${root}/user/${userId}`,

  USER_CURRENT: () => `${root}/user/current`,

  USER_UPDATE_NAME: (userId, username) => `${root}/user/${userId}/name?name=${username}`,

  USER_UPDATE_PASSWORD: (userId, oldPassword, newPassword) => `${root}/user/${userId}/password?old=${oldPassword}&new=${newPassword}`,

  USER_UPDATE_PLAYER: (userId, player) => `${root}/user/${userId}/player?player=${player}`,

  USER_UPDATE_ROLE: (userId, role) => `${root}/user/${userId}/role/${role}`,

  USER_GENERATE_AUTHKEY: (userId, extended) => `${root}/user/generate/${userId}?extended=${extended}`,

  USER_IMG: (userId) => `${root}/img/${userId}`,

  /*
   * REQUEST
   */

  REQUEST_LIST: () => `${root}/request`,

  REQUEST_CREATE: (userId, type, request) => `${root}/request/create/${userId}?type=${type}&request=${request}`,

  REQUEST_CREATE_TAKEDOWN: (email, movieId) => `${root}/request/create/takedown?email=${email}&movie=${movieId}`,

  REQUEST_EDIT: (requestId, request) => `${root}/request/${requestId}/edit?request=${request}`,

  REQUEST_OPEN: (requestId) => `${root}/request/${requestId}/open`,

  REQUEST_CLOSE: (requestId) => `${root}/request/${requestId}/close`,

  REQUEST_DELETE: (requestId) => `${root}/request/${requestId}/delete`,

  /*
   * SUBTITLE
   */

  SUBTITLE: (subtitleId) => `${root}/subtitle/${subtitleId}`,

  SUBTITLE_UPLOAD: (movieId, language, file) => `${root}/subtitle/add?movieId=${movieId}&language=${language}&file=${file}`,

  /*
   * VIDEO TIME
   */

  TIME_MOVIE_SET: (movieId, time, userId) => `${root}/time/episode?movieId=${movieId}&time=${time}&userId=${userId}`,

  TIME_EPISODE_SET: (episodeId, time, userId) => `${root}/time/episode?episodeId=${episodeId}&time=${time}&userId=${userId}`,

  TIME_DELETE: (timeId) => `${root}/time/delete/${timeId}`,

  /*
   * VIDEO
   */

  VIDEO_MOVIE: (movieId) => `${root}/video/movie/${movieId}`,

  VIDEO_EPISODE: (episodeId) => `${root}/video/episode/${episodeId}`,

  //TODO: file within param? /upload & /subtitle/add & /profileimg

};

export default Api;
