export type accountNavigatorParamsList = {
  StartScreen: undefined;
  Login: undefined;
  Signup: undefined;
  RecoverPassword: undefined;
  ResetPassword: undefined;
};

export type drawerNavigationParamsList = {
  Main: undefined;
};

export type tabParamsList = {
  Home: undefined;
  Library: undefined;
  Browse: undefined;
  Search: undefined;
};

export type homeParamList = {
  HomeScreen: undefined;
  GenreHomeTabs: undefined;
  ArtistHomeScreen: { id: string };
  PlaylistHomeScreen: { id: string };
  AlbumHomeScreen: { id: string };
};

export type libraryParamList = {
  LibraryHome: undefined;
  AllPlayList: undefined;
  PlayListScreen: { id: string };
  AllAlbum: undefined;
  AlbumScreen: { id: string };
  AllArtists: undefined;
  ArtistScreen: { id: string };
  ListeningHistoryScreen: undefined;
};

export type searchParamsList = {
  SearchScreen: undefined;
};

export type genreParamList = {
  BrowseGenre: undefined;
  GenreTabs: undefined;
  ArtistScreen: { id: string };
  PlaylistScreen: { id: string };
};
