# pip install gltflib
import gltflib

glt = gltflib.GLTF.load("woman_full.gltf")
glt.export("woman_full.glb")
