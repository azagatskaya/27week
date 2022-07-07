import React from 'react';
import styles from './App.css';
import Cat from './components/Cat.jsx';

const cats = [
  {
  name: 'Мурзик',
  url: 'https://oir.mobi/uploads/posts/2021-04/1619619348_59-oir_mobi-p-samie-milie-kotiki-zhivotnie-krasivo-foto-65.jpg'
  }, {
    name: 'Васька',
    url: 'https://avatars.mds.yandex.net/get-altay/2755030/2a000001720e14d15a4a29db8a76197c5bd5/XXXL',
    isSelected: true
  }, {
    name: 'Пушок',
    url: 'https://oir.mobi/uploads/posts/2021-04/1619619315_19-oir_mobi-p-samie-milie-kotiki-zhivotnie-krasivo-foto-23.jpg'
}
]

function App(props) {
  return (
    <div className={props.theme.App + ' ' + styles.App}>
    {/* <React.Fragment className="App"> */}
      {cats.map(cat => <Cat name={cat.name} url={cat.url} isSelected={cat.isSelected}></Cat>
      )}
      {/* </React.Fragment> */}
    </div>
  );
}

export default App;
