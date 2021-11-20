import { Component } from "react";
//import styled components
import {
  BackgroundContainer,
  HeaderElement,
  QuestionHeader,
  TextAreaPlace,
  FormElement,
  SubnmitButton,
  ResultText,
  GiftContainer,
  GifImageElement
} from "./styledComponents";
//Create a class
export default class TriviaGame extends Component {
  //initializing state
  state = {
    qusetionText: "",
    answerText: "",
    enteredText: "",
    result: "",
    loading: true
  };
  //loading  a data from url using componentDidMount()
  componentDidMount() {
    this.getQuestion();
  }

  getQuestion = async () => {
    this.setState({ loading: true });
    const response = await fetch("https://jservice.io/api/random");
    const fetchedData = await response.json();
    console.log(fetchedData[0].answer);
    this.setState({
      qusetionText: fetchedData[0].question,
      answerText: fetchedData[0].answer,
      loading: false
    });
  };

  //when user type the text we store it in enteredText
  onChangedText = (event) => {
    this.setState({ enteredText: event.target.value });
  };
//on Click on Submit Button we check the whether the enter answer matches to actual answer 
  onSubmitAnswer = (e) => {
    e.preventDefault();
    const { answerText, enteredText } = this.state;
    if (answerText === enteredText) {
      this.setState({ result: "Correct Answer" });
      this.getQuestion();
    } else {
      this.setState({ result: "Worng Answer" });
    }
  };
  //this is to show the webpage view
  renderView = () => {
    const { qusetionText, result } = this.state;
    return (
      <>
        <HeaderElement>Triva Game</HeaderElement>
        <QuestionHeader>"{qusetionText}"</QuestionHeader>
        <ResultText>{result}</ResultText>
        <FormElement onSubmit={this.onSubmitAnswer}>
          <TextAreaPlace
            onChange={this.onChangedText}
            placeholder="Enter Your Answer Here"
          />
          <SubnmitButton type="submit">Submit</SubnmitButton>
        </FormElement>
      </>
    );
  };
  //this is for loader element
  renderLoading = () => (
    <GiftContainer>
      <GifImageElement src="http://i.giphy.com/13Xkz5sLdjGiQw.gif" />
    </GiftContainer>
  );

  render() {
    const { loading } = this.state;
    return (
      <BackgroundContainer>
        {loading ? this.renderLoading() : this.renderView()}
      </BackgroundContainer>
    );
  }
}
