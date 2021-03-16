import './App.css';
import HeaderBar from './components/Header';
import HomeComponent from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DetailedProblemComponent from './components/DetailedProblem';
import CreateProblemComponent from './components/CreateProblem';
import { QueryClient, QueryClientProvider } from 'react-query';

//syntax highlight
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import java from 'react-syntax-highlighter/dist/esm/languages/hljs/java';
import cpp from 'react-syntax-highlighter/dist/esm/languages/hljs/cpp';
SyntaxHighlighter.registerLanguage('java', java);
SyntaxHighlighter.registerLanguage('cpp', cpp);
const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router>
          <HeaderBar />
          <Switch>
            <Route path='/problem/:id'>
              <DetailedProblemComponent />
            </Route>
            <Route path='/create'>
              <CreateProblemComponent />
            </Route>
            <Route exact path='/'>
              <HomeComponent />
            </Route>
          </Switch>
        </Router>
      </QueryClientProvider>
    </>
  );
}

export default App;
