export type accountNavigatorParamsList = {
  StartScreen: undefined;
  Login: undefined;
  Signup: undefined;
  RecoverPassword: undefined;
  ResetPassword: undefined;
};

export interface IPlaylist {
  album: string;
  albumImgUrl: string;
  artist: string;
  id: string;
  preview: string;
  title: string;
  duration: number;
}

type playlistRouteType = {
  data: IPlaylist;
};

export type drawerNavigationParamsList = {
  Main: tabParamsList;
};

export type tabParamsList = {
  Home: undefined;
  Library: undefined;
  Browse: undefined;
  Search: undefined;
  AddToPlaylist: undefined;
};

export type homeParamList = {
  HomeScreen: undefined;
  GenreHomeTabs: undefined;
  ArtistHomeScreen: { id: string };
  PlaylistHomeScreen: { id: string };
  AlbumHomeScreen: { id: string };
  CreatePlaylist: undefined;
  AddToPlaylist: playlistRouteType;
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
  newPlaylistScreen: undefined;
  AddToPlaylist: playlistRouteType;
};

export type searchParamsList = {
  SearchScreen: undefined;
};

export type genreParamList = {
  BrowseGenre: undefined;
  GenreTabs: { title: string; id: string; genreId: string } | undefined;
  ArtistScreen: { id: string };
  PlaylistScreen: { id: string };
  AddToPlaylist: playlistRouteType;
};
