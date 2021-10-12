import React, { useContext } from "react";
import DrawerNavigator from "./DrawerNavigation";
import { AuthContext } from "../services/authentication/auth.service";
import AccountNavigator from "./AccountNavigation";
import GenreProvider from "../services/genre/genre.service";
import ArtistProvider from "../services/artists/artist.service";
import RecentlyPlayedProvider from "../services/recentlyPlayed/RecentlyPlayed.services";

const Navigation = () => {
  const { user } = useContext(AuthContext);
  return (
    <React.Fragment>
      {user ? (
        <GenreProvider>
          <ArtistProvider>
            <RecentlyPlayedProvider>
              <DrawerNavigator />
            </RecentlyPlayedProvider>
          </ArtistProvider>
        </GenreProvider>
      ) : (
        <AccountNavigator />
      )}
    </React.Fragment>
  );
};

export default Navigation;
