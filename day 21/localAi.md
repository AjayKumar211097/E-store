# **🚀 Local Setup & EC2 Deployment Guide**

## **1️⃣ Local Setup (Run on Your PC)**

### **📌 Install Dependencies**

```sh
pip install fastapi uvicorn chromadb llama-index openai pdfplumber python-docx pandas
```

### **📌 Parse Documents (PDF, Word, CSV)**

Create `parse_docs.py`:

```python
import pdfplumber
import docx
import pandas as pd

def extract_text_from_pdf(pdf_path):
    with pdfplumber.open(pdf_path) as pdf:
        return "\n".join([page.extract_text() for page in pdf.pages if page.extract_text()])

def extract_text_from_word(doc_path):
    doc = docx.Document(doc_path)
    return "\n".join([para.text for para in doc.paragraphs])

def extract_text_from_csv(csv_path):
    df = pd.read_csv(csv_path)
    return df.to_string()
```

### **📌 Store & Query Data Using ChromaDB**

Create `vector_store.py`:

```python
import chromadb

chroma_client = chromadb.PersistentClient(path="./chroma_db")
collection = chroma_client.get_or_create_collection(name="documents")

def store_document(doc_text, doc_id):
    collection.add(documents=[doc_text], ids=[doc_id])

def query_documents(query_text):
    results = collection.query(query_texts=[query_text], n_results=3)
    return results["documents"]
```

### **📌 Create a FastAPI Backend**

Create `server.py`:

```python
from fastapi import FastAPI
from vector_store import store_document, query_documents

app = FastAPI()

@app.get("/search")
def search_docs(query: str):
    results = query_documents(query)
    return {"results": results}

@app.post("/upload")
def upload_document(doc_text: str, doc_id: str):
    store_document(doc_text, doc_id)
    return {"message": "Document stored"}
```

### **📌 Run the API Locally**

```sh
uvicorn server:app --reload --port 8000
```

Now, test it in **Postman** or **curl**:

```sh
curl "http://127.0.0.1:8000/search?query=best kitchen product"
```

---

## **2️⃣ Deploying to AWS EC2**

### **📌 Launch an EC2 Instance**

1. Go to **AWS Console → EC2 → Launch Instance**
2. Select **Ubuntu 22.04 LTS** (or any Linux AMI)
3. Choose **t2.micro (Free Tier)**
4. Configure Security Group:
    - Allow **SSH (port 22)** from your IP
    - Allow **HTTP (port 80) and Custom TCP (port 8000)**
5. Launch & Connect via SSH:

```sh
ssh -i your-key.pem ubuntu@your-ec2-public-ip
```

### **📌 Install Python & Git on EC2**

```sh
sudo apt update && sudo apt install -y python3-pip git
```

### **📌 Clone Your Project & Install Dependencies**

```sh
git clone https://github.com/your-repo.git
cd your-repo
pip install -r requirements.txt
```

### **📌 Run FastAPI on EC2**

```sh
uvicorn server:app --host 0.0.0.0 --port 8000
```

### **📌 Test API from Your Local Machine**

```sh
curl "http://your-ec2-public-ip:8000/search?query=best kitchen product"
```

### **📌 Keep It Running with Screen**

```sh
sudo apt install screen
screen -S fastapi-server
uvicorn server:app --host 0.0.0.0 --port 8000
```

Press `CTRL+A` then `D` to detach & keep running.

---

## **🎯 Next Steps**

**Add GPT-3.5 for better responses**
**Build a simple React UI**
**Deploy with Nginx for production**
