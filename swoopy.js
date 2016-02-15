function swoopy(svg, x, y, flipped, rot) {
    var g_arr = svg.append('g.arrow')
        .attr('transform', 'translate('+x+' '+y+')' + (rot ? 'rotate('+rot+')': '') + (flipped ? 'scale(-1,1)' : '')  );
      
    g_arr.append('path')
        .style('fill', 'white')
        .attr('d', 'M-6-.73H6A33.06,33.06,0,0,0-27-33.5v12A20.89,20.89,0,0,1-6-.73Z');
    g_arr.append('path')
        .attr('d', 'M-1.69-11.22l2.54-.47L0-.5-4.87-10.63l2.18-.4A26.1,26.1,0,0,0-27-27v-1A27.59,27.59,0,0,1-1.69-11.22Z');
}
