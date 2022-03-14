/* eslint-disable @typescript-eslint/no-explicit-any */
export type Maybe<T> = T | null;
// eslint-disable-next-line prettier/prettier
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** A time string with format: HH:mm:ss.SSS */
  Time: any;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `Long` scalar type represents 52-bit integers */
  Long: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type FileInfoInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  id: Scalars['ID'];
  username: Scalars['String'];
  email: Scalars['String'];
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsMeRole>;
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRegisterInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UserPermissionsPasswordPayload = {
  __typename?: 'UserPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type Bio = {
  __typename?: 'Bio';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  photo?: Maybe<UploadFile>;
  resume?: Maybe<ComponentPageTextZone>;
  activities?: Maybe<Array<Maybe<ComponentPageTextZone>>>;
  metadata?: Maybe<ComponentPageMetadata>;
};

export type BioInput = {
  photo?: Maybe<Scalars['ID']>;
  resume?: Maybe<ComponentPageTextZoneInput>;
  activities?: Maybe<Array<Maybe<ComponentPageTextZoneInput>>>;
  metadata?: Maybe<ComponentPageMetadatumInput>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditBioInput = {
  photo?: Maybe<Scalars['ID']>;
  resume?: Maybe<EditComponentPageTextZoneInput>;
  activities?: Maybe<Array<Maybe<EditComponentPageTextZoneInput>>>;
  metadata?: Maybe<EditComponentPageMetadatumInput>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateBioInput = {
  data?: Maybe<EditBioInput>;
};

export type UpdateBioPayload = {
  __typename?: 'updateBioPayload';
  bio?: Maybe<Bio>;
};

export type DeleteBioPayload = {
  __typename?: 'deleteBioPayload';
  bio?: Maybe<Bio>;
};

export type Evenement = {
  __typename?: 'Evenement';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  starting: Scalars['Date'];
  ending?: Maybe<Scalars['Date']>;
  image?: Maybe<UploadFile>;
  cancelled?: Maybe<Scalars['Boolean']>;
};

export type EvenementConnection = {
  __typename?: 'EvenementConnection';
  values?: Maybe<Array<Maybe<Evenement>>>;
  groupBy?: Maybe<EvenementGroupBy>;
  aggregate?: Maybe<EvenementAggregator>;
};

export type EvenementAggregator = {
  __typename?: 'EvenementAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type EvenementGroupBy = {
  __typename?: 'EvenementGroupBy';
  id?: Maybe<Array<Maybe<EvenementConnectionId>>>;
  _id?: Maybe<Array<Maybe<EvenementConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<EvenementConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<EvenementConnectionUpdatedAt>>>;
  title?: Maybe<Array<Maybe<EvenementConnectionTitle>>>;
  description?: Maybe<Array<Maybe<EvenementConnectionDescription>>>;
  starting?: Maybe<Array<Maybe<EvenementConnectionStarting>>>;
  ending?: Maybe<Array<Maybe<EvenementConnectionEnding>>>;
  image?: Maybe<Array<Maybe<EvenementConnectionImage>>>;
  cancelled?: Maybe<Array<Maybe<EvenementConnectionCancelled>>>;
};

export type EvenementConnectionId = {
  __typename?: 'EvenementConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<EvenementConnection>;
};

export type EvenementConnection_Id = {
  __typename?: 'EvenementConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<EvenementConnection>;
};

export type EvenementConnectionCreatedAt = {
  __typename?: 'EvenementConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<EvenementConnection>;
};

export type EvenementConnectionUpdatedAt = {
  __typename?: 'EvenementConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<EvenementConnection>;
};

export type EvenementConnectionTitle = {
  __typename?: 'EvenementConnectionTitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<EvenementConnection>;
};

export type EvenementConnectionDescription = {
  __typename?: 'EvenementConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<EvenementConnection>;
};

export type EvenementConnectionStarting = {
  __typename?: 'EvenementConnectionStarting';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<EvenementConnection>;
};

export type EvenementConnectionEnding = {
  __typename?: 'EvenementConnectionEnding';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<EvenementConnection>;
};

export type EvenementConnectionImage = {
  __typename?: 'EvenementConnectionImage';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<EvenementConnection>;
};

export type EvenementConnectionCancelled = {
  __typename?: 'EvenementConnectionCancelled';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<EvenementConnection>;
};

export type EvenementInput = {
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  starting: Scalars['Date'];
  ending?: Maybe<Scalars['Date']>;
  image?: Maybe<Scalars['ID']>;
  cancelled?: Maybe<Scalars['Boolean']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditEvenementInput = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  starting?: Maybe<Scalars['Date']>;
  ending?: Maybe<Scalars['Date']>;
  image?: Maybe<Scalars['ID']>;
  cancelled?: Maybe<Scalars['Boolean']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateEvenementInput = {
  data?: Maybe<EvenementInput>;
};

export type CreateEvenementPayload = {
  __typename?: 'createEvenementPayload';
  evenement?: Maybe<Evenement>;
};

export type UpdateEvenementInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditEvenementInput>;
};

export type UpdateEvenementPayload = {
  __typename?: 'updateEvenementPayload';
  evenement?: Maybe<Evenement>;
};

export type DeleteEvenementInput = {
  where?: Maybe<InputId>;
};

export type DeleteEvenementPayload = {
  __typename?: 'deleteEvenementPayload';
  evenement?: Maybe<Evenement>;
};

export type Footer = {
  __typename?: 'Footer';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  socialmediaLink?: Maybe<Array<Maybe<ComponentSocialSocialmediaLink>>>;
  thanks?: Maybe<Scalars['String']>;
  contact?: Maybe<Scalars['String']>;
};

export type FooterInput = {
  socialmediaLink?: Maybe<Array<Maybe<ComponentSocialSocialmediaLinkInput>>>;
  thanks?: Maybe<Scalars['String']>;
  contact?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditFooterInput = {
  socialmediaLink?: Maybe<Array<Maybe<EditComponentSocialSocialmediaLinkInput>>>;
  thanks?: Maybe<Scalars['String']>;
  contact?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateFooterInput = {
  data?: Maybe<EditFooterInput>;
};

export type UpdateFooterPayload = {
  __typename?: 'updateFooterPayload';
  footer?: Maybe<Footer>;
};

export type DeleteFooterPayload = {
  __typename?: 'deleteFooterPayload';
  footer?: Maybe<Footer>;
};

export type Gallery = {
  __typename?: 'Gallery';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  metadata?: Maybe<ComponentPageMetadata>;
  photos?: Maybe<Array<Maybe<Photo>>>;
};


export type GalleryPhotosArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type GalleryInput = {
  photos?: Maybe<Array<Maybe<Scalars['ID']>>>;
  metadata?: Maybe<ComponentPageMetadatumInput>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditGalleryInput = {
  photos?: Maybe<Array<Maybe<Scalars['ID']>>>;
  metadata?: Maybe<EditComponentPageMetadatumInput>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateGalleryInput = {
  data?: Maybe<EditGalleryInput>;
};

export type UpdateGalleryPayload = {
  __typename?: 'updateGalleryPayload';
  gallery?: Maybe<Gallery>;
};

export type DeleteGalleryPayload = {
  __typename?: 'deleteGalleryPayload';
  gallery?: Maybe<Gallery>;
};

export type Home = {
  __typename?: 'Home';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  header?: Maybe<ComponentPageHeader>;
  shortBio?: Maybe<ComponentPageTextZone>;
  musiqueDeChambreGallery?: Maybe<Array<Maybe<ComponentPageMediaItem>>>;
  metadata?: Maybe<ComponentPageMetadata>;
  medias?: Maybe<Array<Maybe<Medias>>>;
};


export type HomeMediasArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type HomeInput = {
  header: ComponentPageHeaderInput;
  shortBio?: Maybe<ComponentPageTextZoneInput>;
  musiqueDeChambreGallery?: Maybe<Array<Maybe<ComponentPageMediaItemInput>>>;
  medias?: Maybe<Array<Maybe<Scalars['ID']>>>;
  metadata?: Maybe<ComponentPageMetadatumInput>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditHomeInput = {
  header?: Maybe<EditComponentPageHeaderInput>;
  shortBio?: Maybe<EditComponentPageTextZoneInput>;
  musiqueDeChambreGallery?: Maybe<Array<Maybe<EditComponentPageMediaItemInput>>>;
  medias?: Maybe<Array<Maybe<Scalars['ID']>>>;
  metadata?: Maybe<EditComponentPageMetadatumInput>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateHomeInput = {
  data?: Maybe<EditHomeInput>;
};

export type UpdateHomePayload = {
  __typename?: 'updateHomePayload';
  home?: Maybe<Home>;
};

export type DeleteHomePayload = {
  __typename?: 'deleteHomePayload';
  home?: Maybe<Home>;
};

export type Icon = {
  __typename?: 'Icon';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  title?: Maybe<Scalars['String']>;
  faName?: Maybe<Scalars['String']>;
};

export type IconConnection = {
  __typename?: 'IconConnection';
  values?: Maybe<Array<Maybe<Icon>>>;
  groupBy?: Maybe<IconGroupBy>;
  aggregate?: Maybe<IconAggregator>;
};

export type IconAggregator = {
  __typename?: 'IconAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type IconGroupBy = {
  __typename?: 'IconGroupBy';
  id?: Maybe<Array<Maybe<IconConnectionId>>>;
  _id?: Maybe<Array<Maybe<IconConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<IconConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<IconConnectionUpdatedAt>>>;
  title?: Maybe<Array<Maybe<IconConnectionTitle>>>;
  faName?: Maybe<Array<Maybe<IconConnectionFaName>>>;
};

export type IconConnectionId = {
  __typename?: 'IconConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<IconConnection>;
};

export type IconConnection_Id = {
  __typename?: 'IconConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<IconConnection>;
};

export type IconConnectionCreatedAt = {
  __typename?: 'IconConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<IconConnection>;
};

export type IconConnectionUpdatedAt = {
  __typename?: 'IconConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<IconConnection>;
};

export type IconConnectionTitle = {
  __typename?: 'IconConnectionTitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<IconConnection>;
};

export type IconConnectionFaName = {
  __typename?: 'IconConnectionFaName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<IconConnection>;
};

export type IconInput = {
  title?: Maybe<Scalars['String']>;
  faName?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditIconInput = {
  title?: Maybe<Scalars['String']>;
  faName?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateIconInput = {
  data?: Maybe<IconInput>;
};

export type CreateIconPayload = {
  __typename?: 'createIconPayload';
  icon?: Maybe<Icon>;
};

export type UpdateIconInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditIconInput>;
};

export type UpdateIconPayload = {
  __typename?: 'updateIconPayload';
  icon?: Maybe<Icon>;
};

export type DeleteIconInput = {
  where?: Maybe<InputId>;
};

export type DeleteIconPayload = {
  __typename?: 'deleteIconPayload';
  icon?: Maybe<Icon>;
};

export type MediaGallery = {
  __typename?: 'MediaGallery';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  medias?: Maybe<Array<Maybe<Medias>>>;
};


export type MediaGalleryMediasArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type MediaGalleryInput = {
  medias?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditMediaGalleryInput = {
  medias?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateMediaGalleryInput = {
  data?: Maybe<EditMediaGalleryInput>;
};

export type UpdateMediaGalleryPayload = {
  __typename?: 'updateMediaGalleryPayload';
  mediaGallery?: Maybe<MediaGallery>;
};

export type DeleteMediaGalleryPayload = {
  __typename?: 'deleteMediaGalleryPayload';
  mediaGallery?: Maybe<MediaGallery>;
};

export type Medias = {
  __typename?: 'Medias';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  media?: Maybe<UploadFile>;
  soundcloudUrl?: Maybe<Scalars['String']>;
  page?: Maybe<Pages>;
  youtubeId?: Maybe<Scalars['String']>;
  background?: Maybe<UploadFile>;
};

export type MediasConnection = {
  __typename?: 'MediasConnection';
  values?: Maybe<Array<Maybe<Medias>>>;
  groupBy?: Maybe<MediasGroupBy>;
  aggregate?: Maybe<MediasAggregator>;
};

export type MediasAggregator = {
  __typename?: 'MediasAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type MediasGroupBy = {
  __typename?: 'MediasGroupBy';
  id?: Maybe<Array<Maybe<MediasConnectionId>>>;
  _id?: Maybe<Array<Maybe<MediasConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<MediasConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<MediasConnectionUpdatedAt>>>;
  title?: Maybe<Array<Maybe<MediasConnectionTitle>>>;
  description?: Maybe<Array<Maybe<MediasConnectionDescription>>>;
  media?: Maybe<Array<Maybe<MediasConnectionMedia>>>;
  soundcloudUrl?: Maybe<Array<Maybe<MediasConnectionSoundcloudUrl>>>;
  page?: Maybe<Array<Maybe<MediasConnectionPage>>>;
  youtubeId?: Maybe<Array<Maybe<MediasConnectionYoutubeId>>>;
  background?: Maybe<Array<Maybe<MediasConnectionBackground>>>;
};

export type MediasConnectionId = {
  __typename?: 'MediasConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<MediasConnection>;
};

export type MediasConnection_Id = {
  __typename?: 'MediasConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<MediasConnection>;
};

export type MediasConnectionCreatedAt = {
  __typename?: 'MediasConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<MediasConnection>;
};

export type MediasConnectionUpdatedAt = {
  __typename?: 'MediasConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<MediasConnection>;
};

export type MediasConnectionTitle = {
  __typename?: 'MediasConnectionTitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<MediasConnection>;
};

export type MediasConnectionDescription = {
  __typename?: 'MediasConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<MediasConnection>;
};

export type MediasConnectionMedia = {
  __typename?: 'MediasConnectionMedia';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<MediasConnection>;
};

export type MediasConnectionSoundcloudUrl = {
  __typename?: 'MediasConnectionSoundcloudUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<MediasConnection>;
};

export type MediasConnectionPage = {
  __typename?: 'MediasConnectionPage';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<MediasConnection>;
};

export type MediasConnectionYoutubeId = {
  __typename?: 'MediasConnectionYoutubeId';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<MediasConnection>;
};

export type MediasConnectionBackground = {
  __typename?: 'MediasConnectionBackground';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<MediasConnection>;
};

export type MediaInput = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  media?: Maybe<Scalars['ID']>;
  soundcloudUrl?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['ID']>;
  youtubeId?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditMediaInput = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  media?: Maybe<Scalars['ID']>;
  soundcloudUrl?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['ID']>;
  youtubeId?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateMediaInput = {
  data?: Maybe<MediaInput>;
};

export type CreateMediaPayload = {
  __typename?: 'createMediaPayload';
  media?: Maybe<Medias>;
};

export type UpdateMediaInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditMediaInput>;
};

export type UpdateMediaPayload = {
  __typename?: 'updateMediaPayload';
  media?: Maybe<Medias>;
};

export type DeleteMediaInput = {
  where?: Maybe<InputId>;
};

export type DeleteMediaPayload = {
  __typename?: 'deleteMediaPayload';
  media?: Maybe<Medias>;
};

export type MusiqueDeChambre = {
  __typename?: 'MusiqueDeChambre';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  title?: Maybe<Scalars['String']>;
  test?: Maybe<Scalars['Boolean']>;
  metadata?: Maybe<ComponentPageMetadata>;
  pages?: Maybe<Array<Maybe<Pages>>>;
};


export type MusiqueDeChambrePagesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type MusiqueDeChambreInput = {
  pages?: Maybe<Array<Maybe<Scalars['ID']>>>;
  title?: Maybe<Scalars['String']>;
  test?: Maybe<Scalars['Boolean']>;
  metadata?: Maybe<ComponentPageMetadatumInput>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditMusiqueDeChambreInput = {
  pages?: Maybe<Array<Maybe<Scalars['ID']>>>;
  title?: Maybe<Scalars['String']>;
  test?: Maybe<Scalars['Boolean']>;
  metadata?: Maybe<EditComponentPageMetadatumInput>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateMusiqueDeChambreInput = {
  data?: Maybe<EditMusiqueDeChambreInput>;
};

export type UpdateMusiqueDeChambrePayload = {
  __typename?: 'updateMusiqueDeChambrePayload';
  musiqueDeChambre?: Maybe<MusiqueDeChambre>;
};

export type DeleteMusiqueDeChambrePayload = {
  __typename?: 'deleteMusiqueDeChambrePayload';
  musiqueDeChambre?: Maybe<MusiqueDeChambre>;
};

export type Pages = {
  __typename?: 'Pages';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  title?: Maybe<Scalars['String']>;
  header?: Maybe<ComponentPageHeader>;
  content?: Maybe<Array<Maybe<ComponentPageTextZone>>>;
  url: Scalars['String'];
  members?: Maybe<Array<Maybe<ComponentPageMembre>>>;
  soundcloudLink?: Maybe<Scalars['String']>;
  musicItems?: Maybe<Array<Maybe<ComponentPageMusicItem>>>;
};

export type PagesConnection = {
  __typename?: 'PagesConnection';
  values?: Maybe<Array<Maybe<Pages>>>;
  groupBy?: Maybe<PagesGroupBy>;
  aggregate?: Maybe<PagesAggregator>;
};

export type PagesAggregator = {
  __typename?: 'PagesAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type PagesGroupBy = {
  __typename?: 'PagesGroupBy';
  id?: Maybe<Array<Maybe<PagesConnectionId>>>;
  _id?: Maybe<Array<Maybe<PagesConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<PagesConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<PagesConnectionUpdatedAt>>>;
  title?: Maybe<Array<Maybe<PagesConnectionTitle>>>;
  header?: Maybe<Array<Maybe<PagesConnectionHeader>>>;
  url?: Maybe<Array<Maybe<PagesConnectionUrl>>>;
  soundcloudLink?: Maybe<Array<Maybe<PagesConnectionSoundcloudLink>>>;
};

export type PagesConnectionId = {
  __typename?: 'PagesConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PagesConnection>;
};

export type PagesConnection_Id = {
  __typename?: 'PagesConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PagesConnection>;
};

export type PagesConnectionCreatedAt = {
  __typename?: 'PagesConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PagesConnection>;
};

export type PagesConnectionUpdatedAt = {
  __typename?: 'PagesConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PagesConnection>;
};

export type PagesConnectionTitle = {
  __typename?: 'PagesConnectionTitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PagesConnection>;
};

export type PagesConnectionHeader = {
  __typename?: 'PagesConnectionHeader';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PagesConnection>;
};

export type PagesConnectionUrl = {
  __typename?: 'PagesConnectionUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PagesConnection>;
};

export type PagesConnectionSoundcloudLink = {
  __typename?: 'PagesConnectionSoundcloudLink';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PagesConnection>;
};

export type PageInput = {
  title?: Maybe<Scalars['String']>;
  header?: Maybe<ComponentPageHeaderInput>;
  content?: Maybe<Array<Maybe<ComponentPageTextZoneInput>>>;
  url: Scalars['String'];
  members?: Maybe<Array<Maybe<ComponentPageMembreInput>>>;
  soundcloudLink?: Maybe<Scalars['String']>;
  musicItems?: Maybe<Array<Maybe<ComponentPageMusicItemInput>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditPageInput = {
  title?: Maybe<Scalars['String']>;
  header?: Maybe<EditComponentPageHeaderInput>;
  content?: Maybe<Array<Maybe<EditComponentPageTextZoneInput>>>;
  url?: Maybe<Scalars['String']>;
  members?: Maybe<Array<Maybe<EditComponentPageMembreInput>>>;
  soundcloudLink?: Maybe<Scalars['String']>;
  musicItems?: Maybe<Array<Maybe<EditComponentPageMusicItemInput>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreatePageInput = {
  data?: Maybe<PageInput>;
};

export type CreatePagePayload = {
  __typename?: 'createPagePayload';
  page?: Maybe<Pages>;
};

export type UpdatePageInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditPageInput>;
};

export type UpdatePagePayload = {
  __typename?: 'updatePagePayload';
  page?: Maybe<Pages>;
};

export type DeletePageInput = {
  where?: Maybe<InputId>;
};

export type DeletePagePayload = {
  __typename?: 'deletePagePayload';
  page?: Maybe<Pages>;
};

export enum Enum_Photo_Ratio {
  Normal = 'normal',
  Wide = 'wide',
  Tall = 'tall',
  Big = 'big'
}

export type Photo = {
  __typename?: 'Photo';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  title: Scalars['String'];
  Description?: Maybe<Scalars['String']>;
  ratio?: Maybe<Enum_Photo_Ratio>;
  media?: Maybe<UploadFile>;
};

export type PhotoConnection = {
  __typename?: 'PhotoConnection';
  values?: Maybe<Array<Maybe<Photo>>>;
  groupBy?: Maybe<PhotoGroupBy>;
  aggregate?: Maybe<PhotoAggregator>;
};

export type PhotoAggregator = {
  __typename?: 'PhotoAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type PhotoGroupBy = {
  __typename?: 'PhotoGroupBy';
  id?: Maybe<Array<Maybe<PhotoConnectionId>>>;
  _id?: Maybe<Array<Maybe<PhotoConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<PhotoConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<PhotoConnectionUpdatedAt>>>;
  title?: Maybe<Array<Maybe<PhotoConnectionTitle>>>;
  Description?: Maybe<Array<Maybe<PhotoConnectionDescription>>>;
  ratio?: Maybe<Array<Maybe<PhotoConnectionRatio>>>;
  media?: Maybe<Array<Maybe<PhotoConnectionMedia>>>;
};

export type PhotoConnectionId = {
  __typename?: 'PhotoConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PhotoConnection>;
};

export type PhotoConnection_Id = {
  __typename?: 'PhotoConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PhotoConnection>;
};

export type PhotoConnectionCreatedAt = {
  __typename?: 'PhotoConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PhotoConnection>;
};

export type PhotoConnectionUpdatedAt = {
  __typename?: 'PhotoConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<PhotoConnection>;
};

export type PhotoConnectionTitle = {
  __typename?: 'PhotoConnectionTitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PhotoConnection>;
};

export type PhotoConnectionDescription = {
  __typename?: 'PhotoConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PhotoConnection>;
};

export type PhotoConnectionRatio = {
  __typename?: 'PhotoConnectionRatio';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<PhotoConnection>;
};

export type PhotoConnectionMedia = {
  __typename?: 'PhotoConnectionMedia';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<PhotoConnection>;
};

export type PhotoInput = {
  title: Scalars['String'];
  Description?: Maybe<Scalars['String']>;
  ratio?: Maybe<Enum_Photo_Ratio>;
  media?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditPhotoInput = {
  title?: Maybe<Scalars['String']>;
  Description?: Maybe<Scalars['String']>;
  ratio?: Maybe<Enum_Photo_Ratio>;
  media?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreatePhotoInput = {
  data?: Maybe<PhotoInput>;
};

export type CreatePhotoPayload = {
  __typename?: 'createPhotoPayload';
  photo?: Maybe<Photo>;
};

export type UpdatePhotoInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditPhotoInput>;
};

export type UpdatePhotoPayload = {
  __typename?: 'updatePhotoPayload';
  photo?: Maybe<Photo>;
};

export type DeletePhotoInput = {
  where?: Maybe<InputId>;
};

export type DeletePhotoPayload = {
  __typename?: 'deletePhotoPayload';
  photo?: Maybe<Photo>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Morph>>>;
};


export type UploadFileRelatedArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UploadFileConnection = {
  __typename?: 'UploadFileConnection';
  values?: Maybe<Array<Maybe<UploadFile>>>;
  groupBy?: Maybe<UploadFileGroupBy>;
  aggregate?: Maybe<UploadFileAggregator>;
};

export type UploadFileAggregator = {
  __typename?: 'UploadFileAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<UploadFileAggregatorSum>;
  avg?: Maybe<UploadFileAggregatorAvg>;
  min?: Maybe<UploadFileAggregatorMin>;
  max?: Maybe<UploadFileAggregatorMax>;
};

export type UploadFileAggregatorSum = {
  __typename?: 'UploadFileAggregatorSum';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorAvg = {
  __typename?: 'UploadFileAggregatorAvg';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMin = {
  __typename?: 'UploadFileAggregatorMin';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMax = {
  __typename?: 'UploadFileAggregatorMax';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileGroupBy = {
  __typename?: 'UploadFileGroupBy';
  id?: Maybe<Array<Maybe<UploadFileConnectionId>>>;
  _id?: Maybe<Array<Maybe<UploadFileConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<UploadFileConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<UploadFileConnectionUpdatedAt>>>;
  name?: Maybe<Array<Maybe<UploadFileConnectionName>>>;
  alternativeText?: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>;
  caption?: Maybe<Array<Maybe<UploadFileConnectionCaption>>>;
  width?: Maybe<Array<Maybe<UploadFileConnectionWidth>>>;
  height?: Maybe<Array<Maybe<UploadFileConnectionHeight>>>;
  formats?: Maybe<Array<Maybe<UploadFileConnectionFormats>>>;
  hash?: Maybe<Array<Maybe<UploadFileConnectionHash>>>;
  ext?: Maybe<Array<Maybe<UploadFileConnectionExt>>>;
  mime?: Maybe<Array<Maybe<UploadFileConnectionMime>>>;
  size?: Maybe<Array<Maybe<UploadFileConnectionSize>>>;
  url?: Maybe<Array<Maybe<UploadFileConnectionUrl>>>;
  previewUrl?: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>;
  provider?: Maybe<Array<Maybe<UploadFileConnectionProvider>>>;
  provider_metadata?: Maybe<Array<Maybe<UploadFileConnectionProvider_Metadata>>>;
};

export type UploadFileConnectionId = {
  __typename?: 'UploadFileConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnection_Id = {
  __typename?: 'UploadFileConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCreatedAt = {
  __typename?: 'UploadFileConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUpdatedAt = {
  __typename?: 'UploadFileConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionName = {
  __typename?: 'UploadFileConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionAlternativeText = {
  __typename?: 'UploadFileConnectionAlternativeText';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCaption = {
  __typename?: 'UploadFileConnectionCaption';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionWidth = {
  __typename?: 'UploadFileConnectionWidth';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHeight = {
  __typename?: 'UploadFileConnectionHeight';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionFormats = {
  __typename?: 'UploadFileConnectionFormats';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHash = {
  __typename?: 'UploadFileConnectionHash';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionExt = {
  __typename?: 'UploadFileConnectionExt';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionMime = {
  __typename?: 'UploadFileConnectionMime';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionSize = {
  __typename?: 'UploadFileConnectionSize';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUrl = {
  __typename?: 'UploadFileConnectionUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionPreviewUrl = {
  __typename?: 'UploadFileConnectionPreviewUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider = {
  __typename?: 'UploadFileConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider_Metadata = {
  __typename?: 'UploadFileConnectionProvider_metadata';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
};

export type FileInput = {
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditFileInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  url?: Maybe<Scalars['String']>;
  previewUrl?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type DeleteFileInput = {
  where?: Maybe<InputId>;
};

export type DeleteFilePayload = {
  __typename?: 'deleteFilePayload';
  file?: Maybe<UploadFile>;
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  type: Scalars['String'];
  controller: Scalars['String'];
  action: Scalars['String'];
  enabled: Scalars['Boolean'];
  policy?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};


export type UsersPermissionsRolePermissionsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type UsersPermissionsRoleUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UsersPermissionsRoleConnection = {
  __typename?: 'UsersPermissionsRoleConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  groupBy?: Maybe<UsersPermissionsRoleGroupBy>;
  aggregate?: Maybe<UsersPermissionsRoleAggregator>;
};

export type UsersPermissionsRoleAggregator = {
  __typename?: 'UsersPermissionsRoleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsRoleGroupBy = {
  __typename?: 'UsersPermissionsRoleGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>;
  _id?: Maybe<Array<Maybe<UsersPermissionsRoleConnection_Id>>>;
  name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>;
  description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>;
  type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>;
};

export type UsersPermissionsRoleConnectionId = {
  __typename?: 'UsersPermissionsRoleConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnection_Id = {
  __typename?: 'UsersPermissionsRoleConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionName = {
  __typename?: 'UsersPermissionsRoleConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionDescription = {
  __typename?: 'UsersPermissionsRoleConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionType = {
  __typename?: 'UsersPermissionsRoleConnectionType';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type RoleInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditRoleInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateRoleInput = {
  data?: Maybe<RoleInput>;
};

export type CreateRolePayload = {
  __typename?: 'createRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UpdateRoleInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditRoleInput>;
};

export type UpdateRolePayload = {
  __typename?: 'updateRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type DeleteRoleInput = {
  where?: Maybe<InputId>;
};

export type DeleteRolePayload = {
  __typename?: 'deleteRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsUserConnection = {
  __typename?: 'UsersPermissionsUserConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  groupBy?: Maybe<UsersPermissionsUserGroupBy>;
  aggregate?: Maybe<UsersPermissionsUserAggregator>;
};

export type UsersPermissionsUserAggregator = {
  __typename?: 'UsersPermissionsUserAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UsersPermissionsUserGroupBy = {
  __typename?: 'UsersPermissionsUserGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>;
  _id?: Maybe<Array<Maybe<UsersPermissionsUserConnection_Id>>>;
  createdAt?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreatedAt>>>;
  updatedAt?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdatedAt>>>;
  username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>;
  email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>;
  provider?: Maybe<Array<Maybe<UsersPermissionsUserConnectionProvider>>>;
  confirmed?: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmed>>>;
  blocked?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBlocked>>>;
  role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>;
};

export type UsersPermissionsUserConnectionId = {
  __typename?: 'UsersPermissionsUserConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnection_Id = {
  __typename?: 'UsersPermissionsUserConnection_id';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionCreatedAt = {
  __typename?: 'UsersPermissionsUserConnectionCreatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUpdatedAt = {
  __typename?: 'UsersPermissionsUserConnectionUpdatedAt';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUsername = {
  __typename?: 'UsersPermissionsUserConnectionUsername';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionEmail = {
  __typename?: 'UsersPermissionsUserConnectionEmail';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionProvider = {
  __typename?: 'UsersPermissionsUserConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionConfirmed = {
  __typename?: 'UsersPermissionsUserConnectionConfirmed';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionBlocked = {
  __typename?: 'UsersPermissionsUserConnectionBlocked';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionRole = {
  __typename?: 'UsersPermissionsUserConnectionRole';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UserInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditUserInput = {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type CreateUserInput = {
  data?: Maybe<UserInput>;
};

export type CreateUserPayload = {
  __typename?: 'createUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type UpdateUserInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditUserInput>;
};

export type UpdateUserPayload = {
  __typename?: 'updateUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type DeleteUserInput = {
  where?: Maybe<InputId>;
};

export type DeleteUserPayload = {
  __typename?: 'deleteUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type ComponentPageHeader = {
  __typename?: 'ComponentPageHeader';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  title: Scalars['String'];
  image?: Maybe<UploadFile>;
  description?: Maybe<Scalars['String']>;
};

export type ComponentPageHeaderInput = {
  title: Scalars['String'];
  image?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
};

export type EditComponentPageHeaderInput = {
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
};

export type ComponentPageMediaItem = {
  __typename?: 'ComponentPageMediaItem';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  backgroundMedia?: Maybe<UploadFile>;
  page?: Maybe<Pages>;
  backgroundImage?: Maybe<UploadFile>;
};

export type ComponentPageMediaItemInput = {
  backgroundMedia?: Maybe<Scalars['ID']>;
  page?: Maybe<Scalars['ID']>;
  backgroundImage?: Maybe<Scalars['ID']>;
};

export type EditComponentPageMediaItemInput = {
  id?: Maybe<Scalars['ID']>;
  backgroundMedia?: Maybe<Scalars['ID']>;
  page?: Maybe<Scalars['ID']>;
  backgroundImage?: Maybe<Scalars['ID']>;
};

export type ComponentPageMembre = {
  __typename?: 'ComponentPageMembre';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  work?: Maybe<Scalars['String']>;
  profil?: Maybe<UploadFile>;
};

export type ComponentPageMembreInput = {
  name?: Maybe<Scalars['String']>;
  work?: Maybe<Scalars['String']>;
  profil?: Maybe<Scalars['ID']>;
};

export type EditComponentPageMembreInput = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  work?: Maybe<Scalars['String']>;
  profil?: Maybe<Scalars['ID']>;
};

export type ComponentPageMetadata = {
  __typename?: 'ComponentPageMetadata';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  keywords?: Maybe<Scalars['String']>;
};

export type ComponentPageMetadatumInput = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  keywords?: Maybe<Scalars['String']>;
};

export type EditComponentPageMetadatumInput = {
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  keywords?: Maybe<Scalars['String']>;
};

export type ComponentPageMusicItem = {
  __typename?: 'ComponentPageMusicItem';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  title: Scalars['String'];
  music?: Maybe<UploadFile>;
};

export type ComponentPageMusicItemInput = {
  title: Scalars['String'];
  music?: Maybe<Scalars['ID']>;
};

export type EditComponentPageMusicItemInput = {
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  music?: Maybe<Scalars['ID']>;
};

export type ComponentPageShortText = {
  __typename?: 'ComponentPageShortText';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type ComponentPageShortTextInput = {
  title?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type EditComponentPageShortTextInput = {
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type ComponentPageTextZone = {
  __typename?: 'ComponentPageTextZone';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  displayAsColumn?: Maybe<Scalars['Boolean']>;
  listContents?: Maybe<Array<Maybe<ComponentPageShortText>>>;
  isJustified?: Maybe<Scalars['Boolean']>;
  isCentered?: Maybe<Scalars['Boolean']>;
  medias?: Maybe<Array<Maybe<UploadFile>>>;
};


export type ComponentPageTextZoneMediasArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ComponentPageTextZoneInput = {
  title?: Maybe<Scalars['String']>;
  displayAsColumn?: Maybe<Scalars['Boolean']>;
  listContents?: Maybe<Array<Maybe<ComponentPageShortTextInput>>>;
  isJustified?: Maybe<Scalars['Boolean']>;
  isCentered?: Maybe<Scalars['Boolean']>;
  medias?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type EditComponentPageTextZoneInput = {
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  displayAsColumn?: Maybe<Scalars['Boolean']>;
  listContents?: Maybe<Array<Maybe<EditComponentPageShortTextInput>>>;
  isJustified?: Maybe<Scalars['Boolean']>;
  isCentered?: Maybe<Scalars['Boolean']>;
  medias?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type ComponentSocialSocialmediaLink = {
  __typename?: 'ComponentSocialSocialmediaLink';
  id: Scalars['ID'];
  _id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  icon?: Maybe<Icon>;
};

export type ComponentSocialSocialmediaLinkInput = {
  title?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['ID']>;
};

export type EditComponentSocialSocialmediaLinkInput = {
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['ID']>;
};

export type Morph = UsersPermissionsMe | UsersPermissionsMeRole | UsersPermissionsLoginPayload | UserPermissionsPasswordPayload | Bio | UpdateBioPayload | DeleteBioPayload | Evenement | EvenementConnection | EvenementAggregator | EvenementGroupBy | EvenementConnectionId | EvenementConnection_Id | EvenementConnectionCreatedAt | EvenementConnectionUpdatedAt | EvenementConnectionTitle | EvenementConnectionDescription | EvenementConnectionStarting | EvenementConnectionEnding | EvenementConnectionImage | EvenementConnectionCancelled | CreateEvenementPayload | UpdateEvenementPayload | DeleteEvenementPayload | Footer | UpdateFooterPayload | DeleteFooterPayload | Gallery | UpdateGalleryPayload | DeleteGalleryPayload | Home | UpdateHomePayload | DeleteHomePayload | Icon | IconConnection | IconAggregator | IconGroupBy | IconConnectionId | IconConnection_Id | IconConnectionCreatedAt | IconConnectionUpdatedAt | IconConnectionTitle | IconConnectionFaName | CreateIconPayload | UpdateIconPayload | DeleteIconPayload | MediaGallery | UpdateMediaGalleryPayload | DeleteMediaGalleryPayload | Medias | MediasConnection | MediasAggregator | MediasGroupBy | MediasConnectionId | MediasConnection_Id | MediasConnectionCreatedAt | MediasConnectionUpdatedAt | MediasConnectionTitle | MediasConnectionDescription | MediasConnectionMedia | MediasConnectionSoundcloudUrl | MediasConnectionPage | MediasConnectionYoutubeId | MediasConnectionBackground | CreateMediaPayload | UpdateMediaPayload | DeleteMediaPayload | MusiqueDeChambre | UpdateMusiqueDeChambrePayload | DeleteMusiqueDeChambrePayload | Pages | PagesConnection | PagesAggregator | PagesGroupBy | PagesConnectionId | PagesConnection_Id | PagesConnectionCreatedAt | PagesConnectionUpdatedAt | PagesConnectionTitle | PagesConnectionHeader | PagesConnectionUrl | PagesConnectionSoundcloudLink | CreatePagePayload | UpdatePagePayload | DeletePagePayload | Photo | PhotoConnection | PhotoAggregator | PhotoGroupBy | PhotoConnectionId | PhotoConnection_Id | PhotoConnectionCreatedAt | PhotoConnectionUpdatedAt | PhotoConnectionTitle | PhotoConnectionDescription | PhotoConnectionRatio | PhotoConnectionMedia | CreatePhotoPayload | UpdatePhotoPayload | DeletePhotoPayload | UploadFile | UploadFileConnection | UploadFileAggregator | UploadFileAggregatorSum | UploadFileAggregatorAvg | UploadFileAggregatorMin | UploadFileAggregatorMax | UploadFileGroupBy | UploadFileConnectionId | UploadFileConnection_Id | UploadFileConnectionCreatedAt | UploadFileConnectionUpdatedAt | UploadFileConnectionName | UploadFileConnectionAlternativeText | UploadFileConnectionCaption | UploadFileConnectionWidth | UploadFileConnectionHeight | UploadFileConnectionFormats | UploadFileConnectionHash | UploadFileConnectionExt | UploadFileConnectionMime | UploadFileConnectionSize | UploadFileConnectionUrl | UploadFileConnectionPreviewUrl | UploadFileConnectionProvider | UploadFileConnectionProvider_Metadata | DeleteFilePayload | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsRoleConnection | UsersPermissionsRoleAggregator | UsersPermissionsRoleGroupBy | UsersPermissionsRoleConnectionId | UsersPermissionsRoleConnection_Id | UsersPermissionsRoleConnectionName | UsersPermissionsRoleConnectionDescription | UsersPermissionsRoleConnectionType | CreateRolePayload | UpdateRolePayload | DeleteRolePayload | UsersPermissionsUser | UsersPermissionsUserConnection | UsersPermissionsUserAggregator | UsersPermissionsUserGroupBy | UsersPermissionsUserConnectionId | UsersPermissionsUserConnection_Id | UsersPermissionsUserConnectionCreatedAt | UsersPermissionsUserConnectionUpdatedAt | UsersPermissionsUserConnectionUsername | UsersPermissionsUserConnectionEmail | UsersPermissionsUserConnectionProvider | UsersPermissionsUserConnectionConfirmed | UsersPermissionsUserConnectionBlocked | UsersPermissionsUserConnectionRole | CreateUserPayload | UpdateUserPayload | DeleteUserPayload | ComponentPageHeader | ComponentPageMediaItem | ComponentPageMembre | ComponentPageMetadata | ComponentPageMusicItem | ComponentPageShortText | ComponentPageTextZone | ComponentSocialSocialmediaLink;

export type InputId = {
  id: Scalars['ID'];
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type AdminUser = {
  __typename?: 'AdminUser';
  id: Scalars['ID'];
  username?: Maybe<Scalars['String']>;
  firstname: Scalars['String'];
  lastname: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  bio?: Maybe<Bio>;
  evenement?: Maybe<Evenement>;
  evenements?: Maybe<Array<Maybe<Evenement>>>;
  evenementsConnection?: Maybe<EvenementConnection>;
  footer?: Maybe<Footer>;
  gallery?: Maybe<Gallery>;
  home?: Maybe<Home>;
  icon?: Maybe<Icon>;
  icons?: Maybe<Array<Maybe<Icon>>>;
  iconsConnection?: Maybe<IconConnection>;
  mediaGallery?: Maybe<MediaGallery>;
  media?: Maybe<Medias>;
  medias?: Maybe<Array<Maybe<Medias>>>;
  mediasConnection?: Maybe<MediasConnection>;
  musiqueDeChambre?: Maybe<MusiqueDeChambre>;
  page?: Maybe<Pages>;
  pages?: Maybe<Array<Maybe<Pages>>>;
  pagesConnection?: Maybe<PagesConnection>;
  photo?: Maybe<Photo>;
  photos?: Maybe<Array<Maybe<Photo>>>;
  photosConnection?: Maybe<PhotoConnection>;
  files?: Maybe<Array<Maybe<UploadFile>>>;
  filesConnection?: Maybe<UploadFileConnection>;
  role?: Maybe<UsersPermissionsRole>;
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  rolesConnection?: Maybe<UsersPermissionsRoleConnection>;
  user?: Maybe<UsersPermissionsUser>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  usersConnection?: Maybe<UsersPermissionsUserConnection>;
  me?: Maybe<UsersPermissionsMe>;
};


export type QueryBioArgs = {
  publicationState?: Maybe<PublicationState>;
};


export type QueryEvenementArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryEvenementsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryEvenementsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryFooterArgs = {
  publicationState?: Maybe<PublicationState>;
};


export type QueryGalleryArgs = {
  publicationState?: Maybe<PublicationState>;
};


export type QueryHomeArgs = {
  publicationState?: Maybe<PublicationState>;
};


export type QueryIconArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryIconsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryIconsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryMediaGalleryArgs = {
  publicationState?: Maybe<PublicationState>;
};


export type QueryMediaArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryMediasArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryMediasConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryMusiqueDeChambreArgs = {
  publicationState?: Maybe<PublicationState>;
};


export type QueryPageArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryPagesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryPagesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryPhotoArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryPhotosArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryPhotosConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryFilesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryFilesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryRoleArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryRolesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryRolesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<PublicationState>;
};


export type QueryUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<PublicationState>;
};


export type QueryUsersConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  updateBio?: Maybe<UpdateBioPayload>;
  deleteBio?: Maybe<DeleteBioPayload>;
  createEvenement?: Maybe<CreateEvenementPayload>;
  updateEvenement?: Maybe<UpdateEvenementPayload>;
  deleteEvenement?: Maybe<DeleteEvenementPayload>;
  updateFooter?: Maybe<UpdateFooterPayload>;
  deleteFooter?: Maybe<DeleteFooterPayload>;
  updateGallery?: Maybe<UpdateGalleryPayload>;
  deleteGallery?: Maybe<DeleteGalleryPayload>;
  updateHome?: Maybe<UpdateHomePayload>;
  deleteHome?: Maybe<DeleteHomePayload>;
  createIcon?: Maybe<CreateIconPayload>;
  updateIcon?: Maybe<UpdateIconPayload>;
  deleteIcon?: Maybe<DeleteIconPayload>;
  updateMediaGallery?: Maybe<UpdateMediaGalleryPayload>;
  deleteMediaGallery?: Maybe<DeleteMediaGalleryPayload>;
  createMedia?: Maybe<CreateMediaPayload>;
  updateMedia?: Maybe<UpdateMediaPayload>;
  deleteMedia?: Maybe<DeleteMediaPayload>;
  updateMusiqueDeChambre?: Maybe<UpdateMusiqueDeChambrePayload>;
  deleteMusiqueDeChambre?: Maybe<DeleteMusiqueDeChambrePayload>;
  createPage?: Maybe<CreatePagePayload>;
  updatePage?: Maybe<UpdatePagePayload>;
  deletePage?: Maybe<DeletePagePayload>;
  createPhoto?: Maybe<CreatePhotoPayload>;
  updatePhoto?: Maybe<UpdatePhotoPayload>;
  deletePhoto?: Maybe<DeletePhotoPayload>;
  /** Delete one file */
  deleteFile?: Maybe<DeleteFilePayload>;
  /** Create a new role */
  createRole?: Maybe<CreateRolePayload>;
  /** Update an existing role */
  updateRole?: Maybe<UpdateRolePayload>;
  /** Delete an existing role */
  deleteRole?: Maybe<DeleteRolePayload>;
  /** Create a new user */
  createUser?: Maybe<CreateUserPayload>;
  /** Update an existing user */
  updateUser?: Maybe<UpdateUserPayload>;
  /** Delete an existing user */
  deleteUser?: Maybe<DeleteUserPayload>;
  upload: UploadFile;
  multipleUpload: Array<Maybe<UploadFile>>;
  updateFileInfo: UploadFile;
  login: UsersPermissionsLoginPayload;
  register: UsersPermissionsLoginPayload;
  forgotPassword?: Maybe<UserPermissionsPasswordPayload>;
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
};


export type MutationUpdateBioArgs = {
  input?: Maybe<UpdateBioInput>;
};


export type MutationCreateEvenementArgs = {
  input?: Maybe<CreateEvenementInput>;
};


export type MutationUpdateEvenementArgs = {
  input?: Maybe<UpdateEvenementInput>;
};


export type MutationDeleteEvenementArgs = {
  input?: Maybe<DeleteEvenementInput>;
};


export type MutationUpdateFooterArgs = {
  input?: Maybe<UpdateFooterInput>;
};


export type MutationUpdateGalleryArgs = {
  input?: Maybe<UpdateGalleryInput>;
};


export type MutationUpdateHomeArgs = {
  input?: Maybe<UpdateHomeInput>;
};


export type MutationCreateIconArgs = {
  input?: Maybe<CreateIconInput>;
};


export type MutationUpdateIconArgs = {
  input?: Maybe<UpdateIconInput>;
};


export type MutationDeleteIconArgs = {
  input?: Maybe<DeleteIconInput>;
};


export type MutationUpdateMediaGalleryArgs = {
  input?: Maybe<UpdateMediaGalleryInput>;
};


export type MutationCreateMediaArgs = {
  input?: Maybe<CreateMediaInput>;
};


export type MutationUpdateMediaArgs = {
  input?: Maybe<UpdateMediaInput>;
};


export type MutationDeleteMediaArgs = {
  input?: Maybe<DeleteMediaInput>;
};


export type MutationUpdateMusiqueDeChambreArgs = {
  input?: Maybe<UpdateMusiqueDeChambreInput>;
};


export type MutationCreatePageArgs = {
  input?: Maybe<CreatePageInput>;
};


export type MutationUpdatePageArgs = {
  input?: Maybe<UpdatePageInput>;
};


export type MutationDeletePageArgs = {
  input?: Maybe<DeletePageInput>;
};


export type MutationCreatePhotoArgs = {
  input?: Maybe<CreatePhotoInput>;
};


export type MutationUpdatePhotoArgs = {
  input?: Maybe<UpdatePhotoInput>;
};


export type MutationDeletePhotoArgs = {
  input?: Maybe<DeletePhotoInput>;
};


export type MutationDeleteFileArgs = {
  input?: Maybe<DeleteFileInput>;
};


export type MutationCreateRoleArgs = {
  input?: Maybe<CreateRoleInput>;
};


export type MutationUpdateRoleArgs = {
  input?: Maybe<UpdateRoleInput>;
};


export type MutationDeleteRoleArgs = {
  input?: Maybe<DeleteRoleInput>;
};


export type MutationCreateUserArgs = {
  input?: Maybe<CreateUserInput>;
};


export type MutationUpdateUserArgs = {
  input?: Maybe<UpdateUserInput>;
};


export type MutationDeleteUserArgs = {
  input?: Maybe<DeleteUserInput>;
};


export type MutationUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  file: Scalars['Upload'];
};


export type MutationMultipleUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  files: Array<Maybe<Scalars['Upload']>>;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info: FileInfoInput;
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
  code: Scalars['String'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};







export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}
