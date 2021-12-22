$.get("http://localhost:3000/posts", (data) => {
    render(data);
});

function render(list) {
    list.map((val) => {
        if (val.data[0].val == 1) {
            $(".stack").click(function(e) {
                e.preventDefault();
                $(".nd-title").addClass("nd-til");
                $(".nd-til").append(`
                    <h1>${val.data[0].content1}</h1>
                    <p>${val.data[0].bai1[0].title}</p>
                `);
                $(".nd-definition").addClass("nd-def");
                $(".nd-def").append(`
                    <p>${val.data[0].bai1[0].noidung[0].DN}</p>
                    <img src="${val.data[0].bai1[0].noidung[0].img1}" alt="Stack data structures">
                    <p>${val.data[0].bai1[0].noidung[0].DN1}</p>
                `);
                $(".nd-operation").addClass("nd-deff");
                $(".nd-deff").append(`
                    <h2>LIFO Priciple</h2>
                    <p>${val.data[0].bai1[0].noidung[0].methods}</p>
                    <img src="${val.data[0].bai1[0].noidung[0].img2}" alt="Stack LIFO">
                    <h2>Basic operation of Stack</h2>
                    <p>${val.data[0].bai1[0].noidung[0].operation}</p>
                    <h2>Working of Stack</h2>
                    <p>${val.data[0].bai1[0].noidung[0].work}</p>
                `);
                $(".nd-complexity").addClass("nd-com");
                $(".nd-com").append(`
                    <p>${val.data[0].bai1[0].noidung[0].complex1}</p>
                    <pre class="exec" style="max-height: 600px; width: 660px;"><code class="cpp hljs"><span class="hljs-comment">// Stack implementation in C++</span>

<span class="hljs-meta">#<span class="hljs-meta-keyword">include</span> <span class="hljs-meta-string">&lt;stdlib.h&gt;</span></span>
<span class="hljs-meta">#<span class="hljs-meta-keyword">include</span> <span class="hljs-meta-string">&lt;iostream&gt;</span></span>

<span class="hljs-keyword">using</span> <span class="hljs-keyword">namespace</span> <span class="hljs-built_in">std</span>;

<span class="hljs-meta">#<span class="hljs-meta-keyword">define</span> MAX 10</span>
<span class="hljs-keyword">int</span> size = <span class="hljs-number">0</span>;

<span class="hljs-comment">// Creating a stack</span>
<span class="hljs-class"><span class="hljs-keyword">struct</span> <span class="hljs-title">stack</span> {</span>
  <span class="hljs-keyword">int</span> items[MAX];
  <span class="hljs-keyword">int</span> top;
};
<span class="hljs-keyword">typedef</span> <span class="hljs-class"><span class="hljs-keyword">struct</span> <span class="hljs-title">stack</span> <span class="hljs-title">st</span>;</span>

<span class="hljs-function"><span class="hljs-keyword">void</span> <span class="hljs-title">createEmptyStack</span><span class="hljs-params">(st *s)</span> </span>{
  s-&gt;top = <span class="hljs-number">-1</span>;
}

<span class="hljs-comment">// Check if the stack is full</span>
<span class="hljs-function"><span class="hljs-keyword">int</span> <span class="hljs-title">isfull</span><span class="hljs-params">(st *s)</span> </span>{
  <span class="hljs-keyword">if</span> (s-&gt;top == MAX - <span class="hljs-number">1</span>)
    <span class="hljs-keyword">return</span> <span class="hljs-number">1</span>;
  <span class="hljs-keyword">else</span>
    <span class="hljs-keyword">return</span> <span class="hljs-number">0</span>;
}

<span class="hljs-comment">// Check if the stack is empty</span>
<span class="hljs-function"><span class="hljs-keyword">int</span> <span class="hljs-title">isempty</span><span class="hljs-params">(st *s)</span> </span>{
  <span class="hljs-keyword">if</span> (s-&gt;top == <span class="hljs-number">-1</span>)
    <span class="hljs-keyword">return</span> <span class="hljs-number">1</span>;
  <span class="hljs-keyword">else</span>
    <span class="hljs-keyword">return</span> <span class="hljs-number">0</span>;
}

<span class="hljs-comment">// Add elements into stack</span>
<span class="hljs-function"><span class="hljs-keyword">void</span> <span class="hljs-title">push</span><span class="hljs-params">(st *s, <span class="hljs-keyword">int</span> newitem)</span> </span>{
  <span class="hljs-keyword">if</span> (isfull(s)) {
    <span class="hljs-built_in">cout</span> &lt;&lt; <span class="hljs-string">"STACK FULL"</span>;
  } <span class="hljs-keyword">else</span> {
    s-&gt;top++;
    s-&gt;items[s-&gt;top] = newitem;
  }
  size++;
}

<span class="hljs-comment">// Remove element from stack</span>
<span class="hljs-function"><span class="hljs-keyword">void</span> <span class="hljs-title">pop</span><span class="hljs-params">(st *s)</span> </span>{
  <span class="hljs-keyword">if</span> (isempty(s)) {
    <span class="hljs-built_in">cout</span> &lt;&lt; <span class="hljs-string">"\n STACK EMPTY \n"</span>;
  } 
  <span class="hljs-keyword">else</span> {
    <span class="hljs-built_in">cout</span> &lt;&lt; <span class="hljs-string">"Item popped= "</span> &lt;&lt; s-&gt;items[s-&gt;top];
    s-&gt;top--;
  }
  size--;
  <span class="hljs-built_in">cout</span> &lt;&lt; <span class="hljs-built_in">endl</span>;
}

<span class="hljs-comment">// Print elements of stack</span>
<span class="hljs-function"><span class="hljs-keyword">void</span> <span class="hljs-title">printStack</span><span class="hljs-params">(st *s)</span> </span>{
  <span class="hljs-built_in">printf</span>(<span class="hljs-string">"Stack: "</span>);
  <span class="hljs-keyword">for</span> (<span class="hljs-keyword">int</span> i = <span class="hljs-number">0</span>; i &lt; size; i++) {
    <span class="hljs-built_in">cout</span> &lt;&lt; s-&gt;items[i] &lt;&lt; <span class="hljs-string">" "</span>;
  }
  <span class="hljs-built_in">cout</span> &lt;&lt; <span class="hljs-built_in">endl</span>;
}

<span class="hljs-comment">// Driver code</span>
<span class="hljs-function"><span class="hljs-keyword">int</span> <span class="hljs-title">main</span><span class="hljs-params">()</span> </span>{
  <span class="hljs-keyword">int</span> ch;
  st *s = (st *)<span class="hljs-built_in">malloc</span>(<span class="hljs-keyword">sizeof</span>(st));

  createEmptyStack(s);

  push(s, <span class="hljs-number">1</span>);
  push(s, <span class="hljs-number">2</span>);
  push(s, <span class="hljs-number">3</span>);
  push(s, <span class="hljs-number">4</span>);

  printStack(s);

  pop(s);

  <span class="hljs-built_in">cout</span> &lt;&lt; <span class="hljs-string">"\nAfter popping out\n"</span>;
  printStack(s);
}</code></pre>
                    <p>${val.data[0].bai1[0].noidung[0].complex2}</p>
                `);
                $(".nd-application").addClass("nd-app");
                $(".nd-app").append(`
                    <p>${val.data[0].bai1[0].noidung[0].application}</p>
                `);
            });
        }
        if (val.data[1].val == 1) {
            $(".queue").click(function(e) {
                $(".nd-title").empty();
                $(".nd-definition").empty();
                $(".nd-operation").empty();
                $(".nd-complexity").empty();
                $(".nd-application").empty();
                $(".nd-title").removeClass("nd-til");
                e.preventDefault();
                $(".nd-title").addClass("nd-til");
                $(".nd-til").append(`
                  <h1>${val.data[1].content2}</h1>
                  <p>${val.data[1].bai2[0].title}</p>
              `);
            });
        }
    });
}