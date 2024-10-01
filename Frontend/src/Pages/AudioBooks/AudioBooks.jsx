import './AudioBooks.css';
import AudiobooksHeader from "../../Components/AudiobooksHeader/AudioBooksHeader";
import FooterAudioBooks from '../../Components/Footer/FooterAudioBooks'; 
import MainSectionAudiobooks from "../../Components/BodyAudiobooks/MainSectionAudiobooks";
import KatologAudioBooks from '../../Components/BodyAudiobooks/KatalogAudioBooks';

function AudioBooks() {

    return (
        <>
        <div className="element1">
        <AudiobooksHeader />
        </div>
        <MainSectionAudiobooks />
        <KatologAudioBooks />
        <FooterAudioBooks />
        </>
    )
}

export default AudioBooks;
