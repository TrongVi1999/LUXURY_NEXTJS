export const getModel = (data) => {
    const model = data.find(d => d['Type'] == 'VEHICLES' || d['Type'] == 'YACHTS' || d['Type'] == 'HELICOPTERS' || d['Type'] == 'LUX TRAIN');
    return model.Value
}