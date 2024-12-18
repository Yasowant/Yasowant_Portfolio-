import React, { useState, useRef, useEffect } from 'react';
import './Introduction.css';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import { ThemeContext } from '../../Context/theme';
import profilePic from '../../assets/Photo_fw14_056.jpg';

export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const musicPlaylist = [
    {
      title: 'O Mere Dil Ke Chain',
      url: '/music/o-mere-dil-ke-chain.mp3',
    },
    {
      title: 'Papa Kehte Hain',
      url: '/music/papa_kehte_hain.mp3',
    },
    {
      title: 'Naadan Parindey',
      url: '/music/naadaan-parindey.mp3',
    },
    {
      title: 'Naadan Parindey (Atif)',
      url: '/music/nadaan_parinde_atif.mp3',
    },
    {
      title: 'Kehne Ko Jashne Bahara Hai',
      url: '/music/kehne_ko.mp3',
    },
    {
      title: 'Keh Doon Tumhe',
      url: '/music/keh_dun_tumhe.mp3',
    },
    {
      title: 'Tum Ho',
      url: '/music/tum_ho.mp3',
    },
    {
      title: 'Lut Gaye',
      url: '/music/lut_gaye.mp3',
    },
    {
      title: 'Rataan Lambiyan (Lofi)',
      url: '/music/raatan_lambiyan_lofi.mp3',
    },
    {
      title: 'Madari',
      url: '/music/madari.mp3',
    },
    {
      title: 'Allah Ke Bande',
      url: '/music/allah_ke_bande.mp3',
    },
    {
      title: 'Man Mera',
      url: '/music/man_mera.mp3',
    },
    {
      title: 'Mere Sapno Ki Rani',
      url: '/music/mere_sapno_ki_rani.mp3',
    },
    {
      title: 'Dekha Tenu Pehli Pehli Baar Ve',
      url: '/music/dekha-tenu.mp3',
    },
    {
      title: 'Yeh Shaam Mastani',
      url: '/music/yeh-shaam.mp3',
    },
    {
      title: 'Chand Sifarish',
      url: '/music/chand_sifarish.mp3',
    },
    {
      title: 'Chahun Main Ya Naa',
      url: '/music/chahun_main_ya_naa.mp3',
    },
    {
      title: 'Jiya Dhadak Dhadak Jaye',
      url: '/music/jiya_dhadak.mp3',
    },
    {
      title: 'Lag Ja Gale',
      url: '/music/lag_ja_gale.mp3',
    },
    {
      title: 'Naina Lagaya Barisha',
      url: '/music/naina_lagaya.mp3',
    },
    {
      title: 'Tumse Milke Dil Ka Hai Jo Haal',
      url: '/music/tumse_milke.mp3',
    },
    {
      title: 'Teri Deewani',
      url: '/music/teri_deewani.mp3',
    },
    {
      title: 'Teri Jhuki Nazar',
      url: '/music/teri_jhuki_nazer.mp3',
    },
    {
      title: 'Tujh Mein Rab Dikhta Hai',
      url: '/music/tujhme_rab.mp3',
    },
    {
      title: 'Afreen Afreen',
      url: '/music/afreen.mp3',
    },
    {
      title: 'Pasoori',
      url: '/music/pasoori.mp3',
    },
    {
      title: 'Saiyaara',
      url: '/music/saiyara.mp3',
    },
    {
      title: 'Chura Liya Hai Tumne',
      url: '/music/churaliya.mp3',
    },
    {
      title: 'Tere Mast Mast Do Nain',
      url: '/music/tere_mast_mast.mp3',
    },
    {
      title: 'Mere Rang Mein',
      url: '/music/mere_rang_mein.mp3',
    },
    {
      title: 'Zarooori Tha',
      url: '/music/zaroori_tha.mp3',
    },
    {
      title: 'Kana Yaari',
      url: '/music/kana_yaari.mp3',
    },
    {
      title: 'O Re Piya',
      url: '/music/o_re_piya.mp3',
    },
    {
      title: 'Kali Kali Zulfon Ke Phande Na Dalo',
      url: '/music/kali_kali_zulfon_ke.mp3',
    },
    {
      title: 'Kabhi Shaam Dhale',
      url: '/music/kabhi-shaam-dhale.mp3',
    },
    {
      title: 'Sajni Paas Bulao Naa',
      url: '/music/sajni.mp3',
    },
    {
      title: 'Laree Choote',
      url: '/music/laare_choote.mp3',
    },
    {
      title: 'Khalasi',
      url: '/music/khalasi.mp3',
    },
    {
      title: 'Ek Ajnabee Haseena Se',
      url: '/music/ek-ajnabee.mp3',
    },
    {
      title: 'Sajni (Jal Band)',
      url: '/music/sajni_jal_band.mp3',
    },
    {
      title: 'Emptiness',
      url: '/music/emptiness.mp3',
    },
    {
      title: 'Kun Faya Kun',
      url: '/music/kun_faya_kun.mp3',
    },
    {
      title: 'Tere Bin Nahi Lagda',
      url: '/music/atif_unplugged.mp3',
    },
    {
      title: 'Neele Neele Ambar Par',
      url: '/music/neele_neele.mp3',
    },
    {
      title: 'Kali Kali Zulfon Ke Phande Na Dalo (Alternate)',
      url: '/music/kali_kali.mp3',
    },
    {
      title: 'Tainu Khabar Nahin',
      url: '/music/munjya.mp3',
    },
    {
      title: 'Main Tenu Samjhawan Ki',
      url: '/music/main_tenu.mp3',
    },
  ];

  // Function to play a song
  const playSong = (index) => {
    setCurrentSongIndex(index);
    setIsPlaying(true);
    audioRef.current.src = musicPlaylist[index].url;
    audioRef.current.play();
  };

  // Function to stop the song
  const stopSong = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  // Function to shuffle a song
  const shuffleSong = () => {
    const randomIndex = Math.floor(Math.random() * musicPlaylist.length);
    playSong(randomIndex);
  };

  // Auto-play next song when the current one ends
  const handleSongEnd = () => {
    const nextIndex = (currentSongIndex + 1) % musicPlaylist.length;
    playSong(nextIndex);
  };

  // Dynamic text based on song status
  const getDynamicText = () => {
    if (isPlaying) {
      return (
        <>
          Here's a surprise for you—welcome to my radio station! Scroll further,
          relax, and enjoy the music! If you're not liking it,{' '}
          <span
            style={{ color: '#007bff', cursor: 'pointer' }}
            onClick={stopSong}
          >
            click here to stop
          </span>{' '}
          the current song, and{' '}
          <span
            style={{ color: '#007bff', cursor: 'pointer' }}
            onClick={shuffleSong}
          >
            hit shuffle
          </span>{' '}
          to change tracks.
        </>
      );
    } else {
      return (
        <>
          Here's a surprise for you—{' '}
          <span
            style={{ color: '#007bff', cursor: 'pointer' }}
            onClick={() => playSong(currentSongIndex)}
          >
            click here to play
          </span>{' '}
          the current song, and{' '}
          <span
            style={{ color: '#007bff', cursor: 'pointer' }}
            onClick={shuffleSong}
          >
            hit shuffle
          </span>{' '}
          to change tracks.
        </>
      );
    }
  };

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={'introduction ' + themename}>
            <div className="introduction_logocontainer">
              <img src={profilePic} alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone, My name is{' '}
                <span className="different">Yasowant Nayak </span> and I am from{' '}
                <span className="different"> Rourkela, Odisha(India)</span>. I
                have completed my graduation in BTech (Electrical Engineering)
                from{' '}
                <span className="different">
                  Galgotias College of Engineering & Technology (GCET)
                </span>
              </h4>
              <div style={{ margin: '20px 0' }}>
                <p style={{ fontSize: '16px', color: '#444' }}>
                  <b>I prefer FM Radio over Spotify</b> - call me old school,
                  but there's something magical about tuning into RJs and their
                  spontaneous charm.
                </p>
                <br />
                <p>
                  <b>Picture this:</b> I'm deep into debugging production issues
                  while the soothing melody of &nbsp;
                  <span
                    style={{ color: '#007bff', cursor: 'pointer' }}
                    onClick={() => playSong(currentSongIndex)}
                  >
                    {musicPlaylist[currentSongIndex].title}
                  </span>
                  &nbsp; plays in the background.
                </p>
                <br />
                <p>
                  <PlayCircleOutlineIcon
                    style={{ color: '#007bff', marginRight: '5px' }}
                  />
                  {getDynamicText()}
                </p>
                <br />
                <h5 style={{ fontStyle: 'italic', color: '#555' }}>
                  Offline moments are my luxury, and I treasure them deeply. I
                  find peace in late-night strolls and enjoy the simple joys of
                  life.
                </h5>
              </div>
              <h4>Terms That can describe me apart from Coding :</h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Cricket Enthusiast{' '}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                eSports Enthusiast{' '}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Travelling{' '}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Sports{' '}
              </h4>
            </div>
          </div>
        </div>
      </section>

      {/* Audio element to play the songs */}
      <audio ref={audioRef} onEnded={handleSongEnd} />
    </>
  );
};
