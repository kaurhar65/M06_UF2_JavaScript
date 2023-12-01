function ejercicio1(){
    let colors = ["verd", "vernmell", "groc", "blau", "negre", "blanc"];

    
    let totsMenorsQueMarro = colors.every(function(color) {
        return color < 'marró';
    });

    document.write(totsMenorsQueMarro);

    
    let colorsMenorsQueMarro = colors.filter(function(color) {
        return color < 'marró';
    });
    document.write(colorsMenorsQueMarro);

    
    let ultimos2 = colors.slice(-2);
    document.write("Los dos últimos: " + ultimos2);

    
    colors.push("turquesa");
    document.write("Nueva array: ", colors);

    
    let index= colors.indexOf('verd');
    if (index !== -1) {
        colors.splice(index, 1);
    }
    document.write(colors);
}