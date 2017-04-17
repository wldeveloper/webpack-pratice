<div class="layer">
    <img src="${ require('../../assets/demo.jpg') }" height="1080" width="1920" alt="" />
    <div>this is <%= name %> layer</div>
    <% for (var i = 0; i < arr.length; i++) { %>
        <%= arr[i] %>
    <% } %>
</div>