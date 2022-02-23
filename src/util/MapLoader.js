import { BufferGeometry, Vector2, Vector3 } from "three";
import { Loader } from "three";
import { FileLoader } from "three/src/loaders/FileLoader";

export const mapInt = (x, in_min, in_max, out_min, out_max) => {
  return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

export class MapLoader extends Loader {
    constructor (manager, minCoord = new Vector2(-4096, -2048), maxCoord = new Vector2(4096, 2048)) {
        super(manager);
        this.minCoord = minCoord;
        this.maxCoord = maxCoord;
    }

    load(url, onLoad, onProgress, onError) {
        const loader = new FileLoader(this.manager);
        
        loader.setPath(this.path);
        loader.setRequestHeader(this.requestHeader);
        loader.setCrossOrigin(this.crossOrigin);

        loader.load(url, text => {
            try {
                let json = JSON.parse(text);
                onLoad(this.parse(json));
            } catch (e) {
                onError(e);
            }
        }, onProgress, onError);
    }

    parse(json) {
        if (json.type === 'FeatureCollection')
            return this.parseFeatureCollection(json).filter(e => e !== undefined);
        else {
            console.warn('[MapLoader]', json.type, 'type not yet implemented');
            return [];
        }
    }

    parseFeatureCollection(json) {
        let meshes = [];
        json.features.forEach(feature => {
            if (feature.type === 'Feature') {
                let result = this.parseFeature(feature);
                if (result instanceof Array) {
                    meshes.push(...result);
                } else {
                    meshes.push(result);
                }
            }
            else console.warn('[MapLoader]', feature.type, 'type not yet implemented');
        });
        return meshes;
    }

    parseFeature(json) {
        if (json.geometry.type === 'Polygon')
            return this.parsePolygon(json.geometry.coordinates);
        else if (json.geometry.type === 'MultiPolygon')
            return this.parseMultiPolygon(json.geometry.coordinates);
        else console.warn('[MapLoader]', json.geometry.type, 'type not yet implemented');
    }

    parsePolygon(json) {
        let points = [];

        json.forEach(coordinateCollection => {
            coordinateCollection.forEach(coordinate => {
                points.push(new Vector3(
                    mapInt(coordinate[0], -180, 180, this.minCoord.x, this.maxCoord.x),
                    mapInt(coordinate[1], -90, 90, this.minCoord.y, this.maxCoord.y)
                )); 
            });
        });

        return new BufferGeometry().setFromPoints(points);
    }

    parseMultiPolygon(json) {
        let polygons = []

        json.forEach(multiPolygonCollection => {
            polygons.push(this.parsePolygon(multiPolygonCollection));
        })

        return polygons;
    }
}