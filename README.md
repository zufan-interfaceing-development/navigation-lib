## README
<p>This is a Navigation bar component for react application.</p>

### Installtion
<code>npm install @zufans/quick-nav</code>
<br>

### Implementation
<code>import QuickNav from "@zufans/quick-nav"</code>
<br>
<code>
    <br> <QuickNav 
    <br>    dark={true} 
    <br>    brand="Zufan" 
    <br>    left={'left'} 
    <br>    center={'center'} 
    <br>    right={'right'}
    <br>>
    <br> \</QuickNav>
</code>


## QuickNav


<table>
    <tr>
        <th>Prop</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>dark</td>
        <td>boolean</td>
        <td>When dark is set to true, the text color changes to white and the navigation background color truns black</td>
    </tr>
    <tr>
        <td>brand</td>
        <td>child or string</td>
        <td>Sets the element or string to the left side</td>
    </tr>
    <tr>
        <td>brandStyling</td>
        <td>object</td>
        <td>It is a reference to the style in the brand property</td>
    </tr>
    <tr>
        <td>brandLink</td>
        <td>string</td>
        <td>This is reference to the anchor tag src property</td>
    </tr>
    <tr>
        <td>brandOnClick</td>
        <td>string</td>
        <td>This is reference to the onClick event handler</td>
    </tr>
    <tr>
        <td>left</td>
        <td>child, element, string</td>
        <td>This property is placed next to this.brand props at the left side</td>
    </tr>
    <tr>
        <td>center</td>
        <td>child, element, string</td>
        <td>This property is placed at the center of the navigation bar</td>
    </tr>
    <tr>
        <td>right</td>
        <td>child, element, string</td>
        <td>This property is placed the far right of the navigation bar</td>
    </tr>
</table>


