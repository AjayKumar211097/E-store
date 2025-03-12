import streamlit as st
import requests

st.title("💬 IKEA Sales AI Chatbot")

query = st.text_input("Ask something about IKEA products or meetings:")

if st.button("Send"):
    response = requests.get(f"http://127.0.0.1:8000/search?query={query}")
    st.write("**AI Response:**", response.json()["results"])
