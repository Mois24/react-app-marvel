import { Component } from "react";
import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import ComicsList from "../comicsList/ComicsList";
import SingleComic from "../singleComic/SingleComic";

import decoration from '../../resources/img/vision.png';


class App extends Component {
    
    state = {
        selectedChar: null,
        selectedComic: null
    }

    onCharSelected = (id) => {
        this.setState({
            selectedChar: id,
        })
    }

    onComicSelected = (id) => {
        this.setState({
            selectedComic: id,
        })
    }

    render() {
        return (
            <div className="app">
                <AppHeader/>
                <main>
                    {/* <ErrorBoundary>
                        <RandomChar/>
                    </ErrorBoundary>
                    <div className="char__content">
                        <ErrorBoundary>
                            <CharList onCharSelected={this.onCharSelected}/>
                        </ErrorBoundary>
                        <ErrorBoundary>
                            <CharInfo charId={this.state.selectedChar}/>
                        </ErrorBoundary>
                    </div>
                    <img className="bg-decoration" src={decoration} alt="vision"/> */}
                    <ComicsList />
                </main>
            </div>
        )
    }
}

export default App;