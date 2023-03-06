import React from 'react';
import './App.css';
import Roster from './components/Roster';
import {observer} from 'mobx-react-lite';
import {configure} from 'mobx';
import {configurePersistable} from 'mobx-persist-store';

// This is enabling batching for handling async functions
setTimeout(() =>
    configure({
        enforceActions: 'never',
        reactionScheduler: (f) => setTimeout(f),
    }),
);

configurePersistable(
    {
        storage: window.localStorage,
    },
);
export const App = observer(() => {
  return (
    <div className="App">
      <Roster/>
    </div>
  );
});
