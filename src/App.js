import React from 'react';
import marked from 'marked';
import './App.css';

const startingMarkdown = `Markdown
==
Previewer
--
**This** is ~~probably~~ the best markdown previewer **_ever_**.

---
#### Other Contenders:

 - This is an internal unordered list element. BOOM!
2. [Others?](http://www.imdb.com/title/tt0230600/)
---
As Socrates said:
>No man has the right to be an amateur in the matter of physical training. It is a shame for a man to grow old without seeing the beauty and strength of which his body is capable.

---
Hey, you! Here's some inline code (pssst, it's ES6). \`let { createClass } = React;\`

##### And finally, how about a block of code? (also ES6):
\`\`\`js
const factorial = (num) => {
  if (num === 0) return 1;
  return num * factorial(num - 1);
};
factorial(4); // 24
\`\`\``

class App extends React.Component {
	constructor() {
		super();
		this.state =   {
			markdown : {__html: marked.parse(startingMarkdown, {sanitize: true})}
	}
	this.changemark = this.changemark.bind(this);
};
	changemark = (e) => {
		this.setState({
			markdown : {__html: marked.parse(e, {sanitize: true})}
		})
	}


	render = () => (
		<div className='container'>
			<div className='row'>
				<div className='col-sm-12'>
					<h1 className='header text-center'>React Markdown Previewer</h1>
				</div>
			</div>
			<div className='row'>
				<div className='col-md-6 col-sm-12'>
					<textarea id = 'editor'defaultValue={startingMarkdown}
						className='input'
						onChange={(e) => {
							this.changemark(e.target.value)
						}}
					/>
				</div>
				<div className='col-md-6 col-sm-12'>
					<div className='output' id='preview' dangerouslySetInnerHTML = {this.state.markdown} ></div>
				</div>
			</div>
		</div>
	);
};

export default App;
